import Request from './Request'
import fetch from 'node-fetch'
import { URLSearchParams } from 'url'

import Users from './Users'
import Projects from './Projects'
import Teams from './Teams'
import Glitch from './Glitch'

const API_TIME_INTERVAL = 0

export interface IRequestOptions {
  method: string
  compress: boolean
  timeout: number
  body: any | null
  headers: Record<string, any>
}

/**
 * API class
 *
 * @class
 */
export default class API {
  _glitch: Glitch
  queue: Request[]
  started: boolean
  users: Users
  projects: Projects
  teams: Teams

  /**
   * API constructor
   *
   * @param {Glitch} glitch Glitch instance
   */
  constructor(glitch: Glitch) {
    this._glitch = glitch
    this.queue = []
    this.started = false

    /**
     * Users methods
     */
    this.users = new Users(this)

    /**
     * Projects methods
     */
    this.projects = new Projects(this)

    /**
     * Teams methods
     */
    this.teams = new Teams(this)
  }

  /**
   * Adds request for queue
   *
   * @param {Request} request Request to call
   * @return {Promise}
   */
  callWithRequest(request: Request): Promise<any> {
    this.queue.push(request)

    this.worker()

    return request.promise
  }

  /**
   * Runs queue
   */
  worker() {
    if (this.started) {
      return
    }

    this.started = true

    const work = () => {
      if (this.queue.length === 0) {
        this.started = false

        return
      }

      this.callMethod(this.queue.shift())

      setTimeout(work, API_TIME_INTERVAL)
    }

    work()
  }

  /**
   * Adds method to queue
   *
   * @param {string} method Method to execute
   * @param {Object} params Parameters for method
   * @param {Object} requestParams Params for request
   * @param {string} requestParams.method Method for request
   * @param {boolean} requestParams.oldApi Use old API url state
   *
   * @return {Promise<any>}
   */
  enqueue(
    method: string,
    params: Record<string, any>,
    requestParams: Partial<{ method: string; oldApi: boolean }>
  ): Promise<any> {
    const request = new Request(method, params, requestParams)

    return this.callWithRequest(request)
  }

  /**
   * Calls the API method
   *
   * @param {Request} request Request to call
   */
  async callMethod(request: Request) {
    const { options } = this._glitch
    const { method, params, requestParams } = request
    const search = new URLSearchParams(params)

    let url = `${
      requestParams.oldApi ? options.apiBaseUrlOld : options.apiBaseUrl
    }/${method}?`
    let requestOptions: IRequestOptions = {
      method: requestParams.method || 'GET',
      compress: false,
      timeout: options.apiTimeout,
      body: null,
      headers: {
        ...options.apiHeaders,
        connection: 'keep-alive'
      }
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
