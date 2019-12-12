/**
 * Member class
 *
 * @class
 */
export default class Member {
  id: any
  userId: any
  accessLevel: any
  constructor(options: Member) {
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
