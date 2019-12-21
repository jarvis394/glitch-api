/**
 * Feature class
 *
 * Represents a Glitch project's feature
 * @class
 */
export default class Feature {
  /**
   * Feature ID
   */
  id: number
  /**
   * Feature name
   */
  name: string
  /**
   * Feature data (usually null)
   */
  data?: any
  /**
   * Date when the project's feature would expire
   */
  expiresAt: Date
  constructor(options: Feature) {
    this.id = options.id
    this.name = options.name
    this.data = options.data
    this.expiresAt = new Date(options.expiresAt)
  }
}
