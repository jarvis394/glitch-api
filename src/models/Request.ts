/**
 * Request class
 *
 * @class
 */
export default class Request {
  method: string
  params: Record<string, any>
  requestParams: Record<string, any>
  promise: Promise<any>
  resolve: (value?: any) => void
  reject: (reason?: any) => void

  /**
   * Request constructor
   *
   * @param {string} method Method to run
   * @param {Object} params Parameters for method
   * @param {Object} requestParams Parameters for request
   */
  constructor(
    method: string,
    params: Record<string, any> = {},
    requestParams: Record<string, any>
  ) {
    this.method = method
    this.params = { ...params }
    this.requestParams = requestParams || { method: 'GET' }

    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }
}
