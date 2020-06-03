/**
 * Glitch API v1 base url
 */
export const API_BASE_URL: string = 'https://api.glitch.com/v1'

/**
 * Glitch API old base url
 */
export const API_BASE_URL_OLD: string = 'https://api.glitch.com'

/**
 * Glitch API websockets base url
 */
export const WEBSOCKET_BASE_URL: string = 'wss://api.glitch.com'

/**
 * Default interval between requests
 */
export const API_TIME_INTERVAL: number = 0

export const API_HEADERS = {
  accept: 'application/json, text/plain, */*',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'en-US,en;q=0.9,ru;q=0.8',
  'content-length': 0,
}
