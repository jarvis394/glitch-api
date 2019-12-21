/**
 * Request options interface
 */
export interface IRequestOptions {
  /**
   * Glitch API method
   */
  method: string
  /**
   * State that shows whether the packet should be compressed
   */
  compress: boolean
  /**
   * Timeout for request
   */
  timeout: number
  /**
   * Request body
   */
  body: any | null
  /**
   * Request headers
   */
  headers: Record<string, any>
}

/**
 * Request parameters interface
 */
export interface IRequestParams {
  /**
   * Method for the request sending
   */
  method: string
  /**
   * Shows whether to use old API URL
   */
  oldApi: boolean
}
