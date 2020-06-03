import API from './API'
import {
  API_BASE_URL,
  API_BASE_URL_OLD,
  API_TIME_INTERVAL,
  API_HEADERS,
} from '../utils/constants'
import Context from '../structures/Context'
import User from '../structures/User'

export interface IGlitchOptions {
  /**
   * User Glitch API authorization token
   */
  token: string | null

  /**
   * Timeout for requests
   */
  apiTimeout: number

  /**
   * Interval between requests
   */
  apiInterval: number

  /**
   * Headers for requests
   */
  apiHeaders: Record<string, any>

  /**
   * Specific base URL for an Glitch API
   */
  apiBaseUrl: string

  /**
   * Specific base URL for an old Glitch API
   */
  apiBaseUrlOld: string

  /**
   * State that shows whether to compress requests before sending.
   * @default true
   */
  compress: boolean

  /**
   * Output to the console debugging info
   * @default false
   */
  debug: boolean
}

/**
 * Glitch class
 *
 * @class
 */
export default class Glitch {
  /**
   * Glitch API class
   */
  api: API

  /**
   * Instance options
   */
  options: IGlitchOptions

  constructor({
    token,
    apiTimeout,
    apiHeaders,
    apiBaseUrl,
    apiBaseUrlOld,
    apiInterval,
    compress,
    debug,
  }: Partial<IGlitchOptions> = {}) {
    this.options = {
      token: token ? token.toString() : null,
      apiTimeout: apiTimeout || 10e3,
      apiInterval: apiInterval || API_TIME_INTERVAL,
      apiHeaders: apiHeaders || API_HEADERS,
      apiBaseUrl: apiBaseUrl || API_BASE_URL,
      apiBaseUrlOld: apiBaseUrlOld || API_BASE_URL_OLD,
      compress: compress || true,
      debug: debug || false,
    }
    this.api = new API(this)
  }

  /**
   * Returns user token
   */
  get token(): string {
    return this.options.token
  }

  /**
   * Returns package version
   */
  get VERSION(): string {
    return require('../../package.json').version
  }

  /**
   * Sets token to the instance options
   * @param token - Token to set
   */
  setToken(token: string): string {
    this.options.token = token
    this.api = new API(this)
    return this.options.token
  }

  // TODO: Returns {"message":"Internal server error","code":"Unauthenticated"}
  // Need to resolve this issue
  //
  /**
   * Allows to set an anonymous user token
   */
  async setAnonToken() {
    try {
      const user: Context<User> = await this.api.enqueue(
        'users/anon',
        {},
        { method: 'POST' }
      )
      const token = user.response.persistentToken
      this.setToken(token)
      return token
    } catch (e) {
      throw e
    }
  }
}
