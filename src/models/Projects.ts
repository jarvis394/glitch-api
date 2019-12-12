import API from "./API"

import Project from '../structures/Project'

const getParams = [
  'id',
  'domain'
]

/**
 * Projects class
 *
 * @class
 */
export default class Projects {
  _api: API

  /**
   * Projects constructor
   *
   * @param {API} api API instance
   */
  constructor(api: API) {
    this._api = api
  }
  
  /**
   * Gets project by id or domain
   *
   * @param {Object} params 
   * @param {string} [params.id]
   * @param {string} [params.domain]
   */
  async get(params: Partial<{ id: number | string, domain: string }>): Promise<Project | null> {
    const param = Object.keys(params).find(e => getParams.some(p => p === e))

    if (!param) {
      throw new Error('No parameter provided, supported: ' + getParams)
    }
    
    const project: Project = await this._api.enqueue(`projects/by/${param}`, params, {
      method: 'GET'
    })

    if (Object.keys(project).length === 0) {
      return null
    }
    
    // @ts-ignore
    return new Project(project[params[param]])
  }
  
  /**
   * Searches project by query
   *
   * @param {Object} params 
   * @param {string} params.q Query
   */
  async search(params: { q: string }) {
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
    
    return projects.map((project: Project) => new Project(project))
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
  async remix(params: Partial<{ id: string | number, domain: string }>) {
    const param = Object.keys(params).find(e => getParams.some(p => p === e))
    
    return await this._api.enqueue(`projects/${param}/remix`, params, {
      method: 'POST',
      oldApi: true
    })
  }
}
