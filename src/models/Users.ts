import User from '../structures/User'
import API from './API'
import Context from 'src/structures/Context'

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

    const context: Context = await this._api.enqueue(
      `users/by/${param}`,
      params,
      {
        method: 'GET',
      }
    )

    if (Object.keys(context.response).length === 0) {
      return null
    }

    // @ts-ignore
    return new User(context.response[params[param]])
  }

  /**
   * Search user by query
   *
   * @param {Object} params
   * @param {string} params.q Query
   */
  async search(params: { q: string }): Promise<User[] | null> {
    const context: Context = await this._api.enqueue('users/search', params, {
      method: 'GET',
      oldApi: true,
    })

    if (context.response.length === 0) {
      return null
    } else {
      return context.response.map((user: User) => new User(user))
    }
  }
}
