const User = require('../structures/User')

const getParams = [
  'id',
  'login'
]

/**
 * Users class
 *
 * @class
 */
class Users {
  /**
   * Users constructor
   *
   * @param {API} api API class
   */
  constructor(api) {
    this._api = api
  }
  
  /**
   * Gets user by id or login
   *
   * @param {Object} params 
   * @param {string|number} [params.id|params.login] 
   */
  async get(params) {
    const param = Object.keys(params).find(e => getParams.some(p => p === e))
    
    const user = await this._api.enqueue(`users/by/${param}`, params, {
      method: 'GET'
    })
    
    return new User(user[params[param]])
  }
  
  /**
   * Search user by query
   *
   * @param {Object} params 
   * @param {string} params.q Query
   */
  async search(params) {
    const users = await this._api.enqueue('users/search', params, {
      method: 'GET',
      oldApi: true
    })
    
    return users.map(user => new User(user))
  }
}

module.exports = Users
