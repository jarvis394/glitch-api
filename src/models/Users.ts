import Algolia from 'algoliasearch'
import User from '../structures/User'
import API from './API'
import Context from '../structures/Context'
import SearchCreds from '../structures/SearchCreds'

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
    const param = Object.keys(params || {}).find(e => getParams.some(p => p === e))
    if (!params || !param) throw new Error('No parameter provided, supported: ' + getParams)

    const context: Context<User> = await this._api.enqueue(
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
   * Searches user by query
   *
   * @param {string} query - Query string
   */
  async search(query: string) {
    if (!query || query.length < 1) {
      throw new Error('No query parameter was provided')
    }

    if (!this._api._options.token) {
      throw new Error('No token in Glitch instance was provided')
    }

    // Get credentials to perform Algolia requests
    const creds = await this._api.getSearchCreds()
    const client = Algolia(creds.id, creds.searchKey)
    const index = client.initIndex('search_users')
    const response = await index.search<User>(query, {
      hitsPerPage: 100,
    })

    return {
      ...response,
      hits: response.hits.map((user: User) => new User(user)),
    }
  }
}
