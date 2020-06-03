import { Response } from 'node-fetch'
import { IRequestOptions } from 'src/interfaces/Requests'

/** Error interface in Context class */
export interface IContextError {
  /** Error's status code, like 404 or 401 */
  statusCode: number
  /** Error's message text */
  message: string
  /** Request options */
  requestOptions: IRequestOptions
}

/**
 * Context class
 *
 * Represents a context of an API response
 * @class
 */
export default class Context<T> {
  /** API response */
  response: T
  /** Requets object */
  request: Request
  /** Contains error that was got from Glitch API */
  error: IContextError
  /** Requets options */
  params: IRequestOptions

  /**
   *
   * @param response - Response object
   * @param text - Response text
   * @param requestOptions - Request options
   */
  constructor(
    response: Response,
    text: string,
    requestOptions: IRequestOptions
  ) {
    if (!response) throw new Error('No response object was provided')
    try {
      this.response = JSON.parse(text)
    } catch (e) {
      throw new Error(`Could not parse the given response text (${text})`)
    }

    this.params = requestOptions
    if (!response.ok)
      this.error = {
        statusCode: response.status,
        message: text,
        requestOptions,
      }
  }
}
