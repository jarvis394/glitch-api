/**
 * Member class
 *
 * @class
 */
class Member {
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

module.exports = Member
