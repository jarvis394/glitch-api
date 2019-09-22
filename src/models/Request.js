/**
 * Request class
 *
 * @class
 */
class Request {
  /**
   * Request constructor
   *
   * @param {string} method Method to run
   * @param {Object} params Parameters for method
   * @param {Object} requestParams Parameters for request
   */
	constructor(method, params = {}, requestParams) {
		this.method = method
		this.params = { ...params }
    this.requestParams = requestParams || { method: 'GET' }

		this.promise = new Promise((resolve, reject) => {
			this.resolve = resolve
			this.reject = reject
		})
	}
}

module.exports = Request
