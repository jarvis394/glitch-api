import API from './API'
import { API_BASE_URL, API_BASE_URL_OLD } from '../utils/constants'

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

  /**
   * Glitch constructor
   *
   * @param {Object} options
   * @param {string} options.token User Glitch API authorization token
   * @param {number} options.apiTimeout Timeout for requests
   * @param {Object} options.apiHeaders Headers for requests
   * @param {string} options.apiBaseUrl Specific base URL for an Glitch API
   * @param {string} options.apiBaseUrlOld Specific base URL for an old Glitch API
   */
  constructor({
    token,
    apiTimeout,
    apiHeaders,
    apiBaseUrl,
    apiBaseUrlOld
  }: Partial<IGlitchOptions> = {}) {
    /**
     * Glitch API class
     */
    this.api = new API(this)

    this.options = {
      token: token ? token.toString() : null,
      apiTimeout: apiTimeout || 10e3,
      apiHeaders: apiHeaders || {},
      apiBaseUrl: apiBaseUrl || API_BASE_URL,
      apiBaseUrlOld: apiBaseUrlOld || API_BASE_URL_OLD
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
