const Team = require('../structures/Team')

const getParams = [
  'url'
]

/**
 * Teams class
 *
 * @class
 */
class Teams {
  /**
   * Teams constructor
   *
   * @param {API} api API instance
   */
  constructor(api) {
    this._api = api
  }
  
  /**
   * Gets project by url
   *
   * @param {Object} params 
   * @param {string} params.url 
   */
  async get(params) {
    const param = Object.keys(params).find(e => getParams.some(p => p === e))
    
    const team = await this._api.enqueue(`teams/by/${param}`, params, {
      method: 'GET'
    })
    
    return new Team(team[params[param]])
  }
  
  /**
   * Search team by query
   *
   * @param {Object} params 
   * @param {string} params.q Query
   */
  async search(params) {
    const teams = await this._api.enqueue('teams/search', params, {
      method: 'GET',
      oldApi: true
    })
    
    return teams.map(team => new Team(team))
  }
}

module.exports = Teams
