import Algolia from 'algoliasearch'
import API from './API'
import Team from '../structures/Team'
import Context from '../structures/Context'
import SearchCreds from '../structures/SearchCreds'

/** @hidden */
const getParams = ['url', 'id']

/**
 * Teams class
 *
 * @class
 */
export default class Teams {
  /**
   * @hidden
   */
  private _api: API

  /**
   * Teams constructor
   *
   * @param {API} api API instance
   */
  constructor(api: API) {
    this._api = api
  }

  /**
   * Gets project by url
   *
   * @param {Object} params
   * @param {string} params.url - Project URL
   * @param {string} params.id - Project ID
   */
  async get(
    params: Partial<{ url: string; id: string | number }>
  ): Promise<Team> {
    const param = Object.keys(params).find(e => getParams.some(p => p === e))

    if (!param) {
      throw new Error('No parameter provided, supported: ' + getParams)
    }

    const context: Context<Team> = await this._api.enqueue(
      `teams/by/${param}`,
      params,
      {
        method: 'GET',
      }
    )

    if (Object.keys(context.response).length === 0) {
      return null
    }

    // @ts-ignore
    return new Team(context.response[params[param]])
  }

  /**
   * Searches team by query
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
    const index = client.initIndex('search_teams')
    const response = await index.search<Team>(query, {
      hitsPerPage: 100,
    })

    return {
      ...response,
      hits: response.hits.map((team: Team) => new Team(team)),
    }
  }
}
