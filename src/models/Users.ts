import User from '../structures/User'
import API from './API'

const getParams = [
  'id',
  'login'
]

/**
 * Users class
 *
 * @class
 */
export default class Users {
  _api: API

  /**
   * Users constructor
   *
   * @param {API} api API class
   */
  constructor(api: API) {
    this._api = api
  }
  
  /**
   * Gets user by id or login
   *
   * @param {Object} params 
   * @param {number} [params.id]
   * @param {string} [params.loign]
   */
  async get(params: Partial<{ id: string | number, login: string }>): Promise<User> {
    const param = Object.keys(params).find(e => getParams.some(p => p === e))
    
    const user: User = await this._api.enqueue(`users/by/${param}`, params, {
      method: 'GET'
    })

    if (Object.keys(user).length === 0) {
      return null
    }
    
    // @ts-ignore
    return new User(user[params[param]])
  }
  
  /**
   * Search user by query
   *
   * @param {Object} params 
   * @param {string} params.q Query
   */
  async search(params: { q: string }): Promise<User[]> {
    const users: User[] = await this._api.enqueue('users/search', params, {
      method: 'GET',
      oldApi: true
    })

    if (users.length === 0) {
      return null
    }
    
    return users.map(user => new User(user))
  }
}
