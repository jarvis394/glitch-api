/**
 * Feature class
 * 
 * @class
 */
export default class Feature {
  /**
   * Feature constructor
   */
  constructor(options) {
    /**
     * Feature ID
     */
    this.id = options.id
    
    /**
     * Feature name
     */
    this.name = options.name
    
    /**
     * Feature data
     */
    this.data = options.data
    
    /**
     * Date when feature expires
     */
    this.expiresAt = new Date(options.expiresAt)
  }
}
