import User from '../structures/User'
import API from './API'

/** @hidden */
const getParams = ['id', 'login']

/**
 * Users class
 *
 * @class
 */
export default class Users {
  /**
   * @hidden
   */
  private _api: API

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
   * @param {number} params.id - User ID
   * @param {string} params.login - User login
   */
  async get(
    params: Partial<{ id: string | number; login: string }>
  ): Promise<User> {
    const param = Object.keys(params).find(e => getParams.some(p => p === e))

    const user: User = await this._api.enqueue(`users/by/${param}`, params, {
      method: 'GET',
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
  async search(params: { q: string }): Promise<User[] | null> {
    const users: User[] = await this._api.enqueue('users/search', params, {
      method: 'GET',
      oldApi: true,
    })

    if (users.length === 0) {
      return null
    } else {
      return users.map(user => new User(user))
    }
  }
}
