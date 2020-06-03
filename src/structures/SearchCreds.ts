/**
 * Credentials used for search class
 *
 * Represents an Algolia creds for searching
 * @class
 */
export default class SearchCreds {
  /**
   * Algoila app ID
   */
  id: string
  /**
   * Algolia search key
   */
  searchKey: string
  constructor(options: Partial<SearchCreds>) {
    this.id = options.id
    this.searchKey = this.searchKey
  }
}
