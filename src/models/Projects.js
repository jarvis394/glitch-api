const Project = require('../structures/Project')

const getParams = [
  'id',
  'domain'
]

/**
 * Projects class
 *
 * @class
 */
class Projects {
  /**
   * Projects constructor
   *
   * @param {API} api API instance
   */
  constructor(api) {
    this._api = api
  }
  
  /**
   * Gets project by id or domain
   *
   * @param {Object} params 
   * @param {string} params.id
   * @param {string} arams.domain
h  */
  async get(params) {
    const param = Object.keys(params).find(e => getParams.some(p => p === e))

    if (!param) {
      throw new Error('No parameter provided, supported: ' + getParams)
    }
    
    const project = await this._api.enqueue(`projects/by/${param}`, params, {
      method: 'GET'
    })

    if (Object.keys(project).length === 0) {
      return null
    }
    
    return new Project(project[params[param]])
  }
  
  /**
   * Searches project by query
   *
   * @param {Object} params 
   * @param {string} params.q Query
   */
  async search(params) {
    if (!params.q) {
      throw new Error('No query parameter provided, supported: q')
    }

    const projects = await this._api.enqueue('projects/search', params, {
      method: 'GET',
      oldApi: true
    })

    if (projects.length === 0) {
      return null
    }
    
    return projects.map(project => new Project(project))
  }
  
  /**
   * Gets project's questions
   */
  async questions() {
    return await this._api.enqueue('projects/questions', {}, {
      method: 'GET',
      oldApi: true
    })
  }
  
  /**
   * Remixes project
   *
   * @param {Object} params 
   * @param {string} [params.id|params.domain] 
   */
  async remix(params) {
    const param = Object.keys(params).find(e => getParams.some(p => p === e))
    
    return await this._api.enqueue(`projects/${param}/remix`, params, {
      method: 'POST',
      oldApi: true
    })
  }
}

module.exports = Projects
