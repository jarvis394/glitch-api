/**
 * Member class
 *
 * @class
 */
export default class Member {
  constructor(options) {
    /**
     * User ID
     */
    this.id = options.userId
    
    /**
     * User access level
     */
    this.accessLevel = options.accessLevel
  }
}
