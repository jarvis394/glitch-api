/**
 * Feature class
 * 
 * @class
 */
export default class Feature {
  id: any
  name: any
  data: any
  expiresAt: Date
  /**
   * Feature constructor
   */
  constructor(options: Feature) {
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
