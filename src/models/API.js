const Request = require('./Request')
const fetch = require('node-fetch')
const { URLSearchParams } = require('url')

const Users = require('./Users')
const Projects = require('./Projects')
const Teams = require('./Teams')

const API_TIME_INTERVAL = 0

/**
 * API class
 *
 * @class
 */
class API {
  /**
   * API constructor
   * 
   * @param {Glitch} glitch Glitch instance
   */
  constructor(glitch) {
    this.glitch = glitch
    this.queue = []
    this.started = false
    
    /**
     * Users methods
     */
    this.users = new Users(this)
    
    /**
     * Projects methods
     */
    this.projects = new Projects(this)
    
    /**
     * Teams methods
     */
    this.teams = new Teams(this)
  }
  
  /**
	 * Adds request for queue
	 *
	 * @param {Request} request Request to call
	 *
	 * @return {Promise}
	 */
	callWithRequest(request) {
		this.queue.push(request)

		this.worker()

		return request.promise
	}
  
  /**
	 * Runs queue
	 */
	worker() {
		if (this.started) {
			return
		}

		this.started = true
    
		const work = () => {
			if (this.queue.length === 0) {
				this.started = false

				return
			}

			this.callMethod(this.queue.shift())
			
      setTimeout(work, API_TIME_INTERVAL)
		}

		work()
	}

	/**
	 * Adds method to queue
	 *
	 * @param {string} method Method to execute
	 * @param {Object} params Parameters for method
   * @param {Object} requestParams Params for request
   * @param {string} requestParams.method Method for request
   * @param {string} requestParams.oldApi Use old API url state
	 *
	 * @return {Promise<Object>}
	 */
	enqueue(method, params, requestParams) {
		const request = new Request(method, params, requestParams)

		return this.callWithRequest(request)
	}
  
  /**
	 * Calls the API method
	 *
	 * @param {Request} request Request to call
	 */
	async callMethod(request) {
		const { options } = this.glitch
		const { method, params, requestParams } = request
    const search = new URLSearchParams(params)
    
    let url = `${requestParams.oldApi ? options.apiBaseUrlOld : options.apiBaseUrl}/${method}?`
    let requestOptions = {
			method: requestParams.method || 'GET',
			compress: false,
			timeout: options.apiTimeout,
			headers: {
				...options.apiHeaders,

				connection: 'keep-alive'
			},
		}
    
    if (options.token) {
      search.append('authorization', options.token)
    }
    
    if (requestParams.method === 'GET') {
      url += search.toString()
    } else {
      requestOptions.body = search
    }
    
		try {
			const resFetch = await fetch(url, requestOptions)
      let json
      
      try {
        json = await resFetch.json()
      } catch (e) {
        return request.reject(new Error(`Can't parse the reponse for method ${method}: ${e.message}`))
      }
      
      if (!resFetch.ok) {
        throw new Error(`[${resFetch.status}] ${json.message}`)
      }
      
      return request.resolve(json)
		} catch (e) {
			return request.reject(e)
    }
	}
}

module.exports = API
