import Algolia from 'algoliasearch'
import API from './API'
import Project from '../structures/Project'
import Editor from '../models/Editor'
import Context from '../structures/Context'
import Logs from './Logs'
import Terminal from './Terminal'

/** @hidden */
const getParams = ['id', 'domain']

/**
 * Projects class
 *
 * @class
 */
export default class Projects {
  /** @hidden */
  private _api: API

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
   * @param {string} params.id - Project ID
   * @param {string} params.domain - Project domain
   */
  async get(
    params: Partial<{ id: string; domain: string }>
  ): Promise<Project | null> {
    const param = Object.keys(params || {}).find(e => getParams.some(p => p === e))
    if (!params || !param) throw new Error('No parameter provided, supported: ' + getParams)

    const context: Context<Project> = await this._api.enqueue(
      `projects/by/${param}`,
      params,
      {
        method: 'GET',
      }
    )

    if (Object.keys(context.response).length === 0) {
      return null
    }

    // @ts-ignore
    return new Project(context.response[params[param]])
  }

  /**
   * Searches project by query
   *
   * @param {string} query - Query string
   */
  async search(query: string) {
    if (!query) {
      throw new Error('No query parameter was provided')
    }

    if (!this._api._options.token) {
      throw new Error('No token in Glitch instance was provided')
    }

    // Get credentials to perform Algolia requests
    const creds = await this._api.getSearchCreds()
    const client = Algolia(creds.id, creds.searchKey)
    const index = client.initIndex('search_projects')
    const response = await index.search<Project>(query, {
      hitsPerPage: 100,
      facetFilters: 'notSafeForKids:false',
    })

    return {
      ...response,
      hits: response.hits.map((project: Project) => new Project(project)),
    }
  }

  /**
   * Gets project's questions
   */
  async questions() {
    return (
      await this._api.enqueue(
        'projects/questions',
        {},
        {
          method: 'GET',
          oldApi: true,
        }
      )
    ).response
  }

  /**
   * Remixes project
   *
   * @param id - Project ID
   */
  async remix(id: string) {
    if (!id) {
      throw new Error('No project id was provided')
    }

    const context: Context<Project> = await this._api.enqueue(
      `projects/${id}/remix`,
      {},
      {
        method: 'POST',
      }
    )

    return new Project(context.response)
  }

  /**
   * Edits project
   * @param params
   * @param params.id - Project ID
   * @param params.domain - Project domain
   */
  async edit(
    params: Partial<{ id: string; domain: string }> | Project
  ): Promise<Editor> {
    if (params instanceof Project) {
      /**
       * We initialize editor with a project that
       * was might have been already got and passed as the parameter
       */
      return new Editor(params, this._api._options.token)
    } else {
      /** Otherwise, we have to get the project */
      return new Editor(await this.get(params), this._api._options.token)
    }
  }

  /**
   * Connects to the project logs
   * @param params
   * @param params.id - Project ID
   * @param params.domain - Project domain
   */
  async logs(
    params: Partial<{ id: string; domain: string }> | Project
  ): Promise<Editor> {
    if (params instanceof Project) {
      /**
       * We initialize logs class with a project that
       * was might have been already got and passed as the parameter
       */
      return new Logs(params, this._api._options.token)
    } else {
      /** Otherwise, we have to get the project */
      return new Logs(await this.get(params), this._api._options.token)
    }
  }

  /**
   * Connects to the project logs
   * @param params
   * @param params.id - Project ID
   * @param params.domain - Project domain
   */
  async terminal(
    params: Partial<{ id: string; domain: string }> | Project
  ): Promise<Editor> {
    if (params instanceof Project) {
      /**
       * We initialize terminal class with a project that
       * was might have been already got and passed as the parameter
       */
      return new Terminal(params, this._api._options.token)
    } else {
      /** Otherwise, we have to get the project */
      return new Terminal(await this.get(params), this._api._options.token)
    }
  }
}
