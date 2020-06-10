import Request from './Request'
import fetch, { Response } from 'node-fetch'
import { URLSearchParams } from 'url'
import { IRequestOptions, IRequestParams } from '../interfaces/Requests'

import Users from './Users'
import Projects from './Projects'
import Teams from './Teams'
import Glitch, { IGlitchOptions } from './Glitch'
import Context from '../structures/Context'
import SearchCreds from '../structures/SearchCreds'

/**
 * API class
 * @class
 */
export default class API {
  /**
   * Glitch instance's options
   * @hidden
   */
  _options: IGlitchOptions

  /**
   * Glitch instance
   * @hidden
   */
  _glitch: Glitch

  /**
   * Requests queue
   */
  protected queue: Request[]

  /**
   * Shows whether the instance is working on a request
   */
  protected working: boolean

  /**
   * Users API
   */
  users: Users

  /**
   * Projects API
   */
  projects: Projects

  /**
   * Teams API
   */
  teams: Teams

  /**
   * API constructor
   * @param glitchOptions - Glitch instance's options
   */
  constructor(glitch: Glitch) {
    this._options = glitch.options
    this._glitch = glitch
    this.queue = []
    this.working = false
    this.users = new Users(this)
    this.projects = new Projects(this)
    this.teams = new Teams(this)
  }

  /**
   * Adds request for queue
   * @param request - Request to call
   */
  callWithRequest(request: Request): Promise<any> {
    this.queue.push(request)

    this.worker()

    return request.promise
  }

  /**
   * Runs queue
   * @private
   */
  private worker() {
    if (this.working) return
    else this.working = true

    const work = () => {
      if (this.queue.length === 0) {
        this.working = false

        return
      }

      this.callMethod(this.queue.shift())

      setTimeout(work, this._options.apiInterval)
    }

    work()
  }

  /**
   * Adds method to queue
   * @param method - Method to execute
   * @param params - Parameters for method
   * @param requestParams - Parameters for request
   * @param requestParams.method - Method for request
   * @param requestParams.oldApi - Use old API url state
   */
  enqueue(
    method: string,
    params: Record<string, any>,
    requestParams: Partial<IRequestParams>
  ): Promise<Context<any>> {
    const request = new Request(method, params, requestParams)

    return this.callWithRequest(request)
  }

  /**
   * Calls the API method
   * @param request - Request to call
   */
  async callMethod(request: Request) {
    const {
      apiBaseUrlOld,
      apiBaseUrl,
      compress,
      apiTimeout,
      apiHeaders,
      token,
    } = this._options
    const { method, params, requestParams } = request
    const search = new URLSearchParams(params)

    let url: string = `${
      requestParams.oldApi ? apiBaseUrlOld : apiBaseUrl
    }/${method}`
    let requestOptions: IRequestOptions = {
      method: requestParams.method || 'GET',
      compress: compress,
      timeout: apiTimeout,
      body: null,
      headers: {
        ...apiHeaders,
        connection: 'keep-alive',
      },
    }

    if (token) {
      search.append('authorization', token)
      requestOptions.headers.authorization = token
    }

    if (requestParams.method === 'GET') url += '?' + search.toString()
    else requestOptions.body = search

    if (this._options.debug)
      console.debug('GLAPI: Fetching', method, requestParams)

    try {
      const resFetch: Response = await fetch(url, requestOptions)
      const resText = await resFetch.text()
      const context: Context<any> = new Context(
        resFetch,
        resText,
        requestOptions
      )

      if (context.error) {
        throw new Error(
          `[${context.error.statusCode}] On trying to execute ${method}: ${context.error.message}`
        )
      }

      if (this._options.debug)
        console.debug('GLAPI: Fetched', context)

      return request.resolve(context)
    } catch (e) {
      return request.reject(e)
    }
  }

  async getSearchCreds(): Promise<SearchCreds> {
    return (
      await this.enqueue(
        'search/creds',
        {},
        {
          method: 'GET',
        }
      )
    ).response
  }
}
