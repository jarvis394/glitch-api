import API from './API'
import {
  API_BASE_URL,
  API_BASE_URL_OLD,
  API_TIME_INTERVAL,
} from '../utils/constants'

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
  }: Partial<IGlitchOptions> = {}) {
    this.api = new API(this)
    this.options = {
      token: token ? token.toString() : null,
      apiTimeout: apiTimeout || 10e3,
      apiInterval: apiInterval || API_TIME_INTERVAL,
      apiHeaders: apiHeaders || {},
      apiBaseUrl: apiBaseUrl || API_BASE_URL,
      apiBaseUrlOld: apiBaseUrlOld || API_BASE_URL_OLD,
      compress: compress || true,
    }
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
    return this.options.token
  }
}
