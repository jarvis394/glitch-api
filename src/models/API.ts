import Request from './Request'
import fetch from 'node-fetch'
import { URLSearchParams } from 'url'
import { IRequestOptions, IRequestParams } from '../interfaces/Requests'

import Users from './Users'
import Projects from './Projects'
import Teams from './Teams'
import Glitch from './Glitch'

/**
 * API class
 * @class
 */
export default class API {
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
   * @param glitch - Glitch instance
   */
  constructor(glitch: Glitch) {
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
    if (this.working) {
      return
    }

    this.working = true

    const work = () => {
      if (this.queue.length === 0) {
        this.working = false

        return
      }

      this.callMethod(this.queue.shift())

      setTimeout(work, this._glitch.options.apiInterval)
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
  ): Promise<any> {
    const request = new Request(method, params, requestParams)

    return this.callWithRequest(request)
  }

  /**
   * Calls the API method
   * @param request - Request to call
   */
  // TODO: Return a Context with { error, response, request, code }
  async callMethod(request: Request) {
    const { options } = this._glitch
    const { method, params, requestParams } = request
    const search = new URLSearchParams(params)

    let url = `${
      requestParams.oldApi ? options.apiBaseUrlOld : options.apiBaseUrl
    }/${method}?`
    let requestOptions: IRequestOptions = {
      method: requestParams.method || 'GET',
      compress: options.compress,
      timeout: options.apiTimeout,
      body: null,
      headers: {
        ...options.apiHeaders,
        connection: 'keep-alive',
      },
    }

    if (options.token) {
      search.append('authorization', options.token)
    }

    if (requestParams.method === 'GET') {
      url += search.toString()
    } else {
      requestOptions.body = search
    }

    try {
      const resFetch = await fetch(url, requestOptions)
      let json

      try {
        json = await resFetch.json()
      } catch (e) {
        return request.reject(
          new Error(
            `Can't parse the reponse for method ${method}: ${e.message}`
          )
        )
      }

      if (!resFetch.ok) {
        throw new Error(`[${resFetch.status}] ${json.message}`)
      }

      return request.resolve(json)
    } catch (e) {
      return request.reject(e)
    }
  }
}
