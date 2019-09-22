const API = require('./API')
const { API_BASE_URL, API_BASE_URL_OLD } = require('../utils/constants')

/**
 * Glitch class
 *
 * @class
 */
class Glitch {
  /**
   * Glitch constructor
   *
   * @param {Object} options
   * @param {string} options.token User Glitch API authorization token
   * @param {number} options.apiTimeout Timeout for requests
   * @param {Object} options.apiHeaders Headers for requests
   * @param {string} options.apiBaseUrl Specific base URL for API
   * @param {string} options.apiBaseUrlOld Specific base URL for old API
   */
  constructor({ token, apiTimeout, apiHeaders, apiBaseUrl, apiBaseUrlOld } = {}) {
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
  get token() {
    return this.options.token
  }
  
  /**
   * Returns package version
   */
  get PACKAGE_VERSION() {
    return require('../../package.json').version
  }
}

module.exports = Glitch