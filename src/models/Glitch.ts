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
   * Constructor options
   */
  options: IGlitchOptions

  constructor({
    token,
    apiTimeout,
    apiHeaders,
    apiBaseUrl,
    apiBaseUrlOld,
    apiInterval,
  }: Partial<IGlitchOptions> = {}) {
    /**
     * Glitch API class
     */
    this.api = new API(this)

    this.options = {
      token: token ? token.toString() : null,
      apiTimeout: apiTimeout || 10e3,
      apiInterval: apiInterval || API_TIME_INTERVAL,
      apiHeaders: apiHeaders || {},
      apiBaseUrl: apiBaseUrl || API_BASE_URL,
      apiBaseUrlOld: apiBaseUrlOld || API_BASE_URL_OLD,
    }
  }

  /**
   * Returns user token
   *
   * @return {string}
   */
  get token(): string {
    return this.options.token
  }

  /**
   * Returns package version
   */
  get PACKAGE_VERSION(): string {
    return require('../../package.json').version
  }
}
