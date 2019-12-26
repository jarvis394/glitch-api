import API from './API'

import Project from '../structures/Project'
import Remix from '../structures/Remix'
import Editor from '../models/Editor'
import Context from 'src/structures/Context'

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
    const param = Object.keys(params).find(e => getParams.some(p => p === e))

    if (!param) {
      throw new Error('No parameter provided, supported: ' + getParams)
    }

    const context: Context = await this._api.enqueue(
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
   * @param {Object} params
   * @param {string} params.q Query
   */
  async search(params: { q: string }) {
    if (!params.q) {
      throw new Error('No query parameter provided, supported: q')
    }

    const context: Context = await this._api.enqueue(
      'projects/search',
      params,
      {
        method: 'GET',
        oldApi: true,
      }
    )

    if (context.response.length === 0) {
      return null
    }

    return context.response.map((project: Project) => new Project(project))
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
   * @param params
   * @param params.id - Project ID
   * @param params.domain - Project domain
   */
  async remix(params: Partial<{ id: string; domain: string }>) {
    const param = Object.keys(params).find(e => getParams.some(p => p === e))

    if (!param) {
      throw new Error('No parameter provided, supported: ' + getParams)
    }

    const context: Context = await this._api.enqueue(
      `projects/${param}/remix`,
      params,
      {
        method: 'POST',
        oldApi: true,
      }
    )

    return new Remix(context.response)
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
}
