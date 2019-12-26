import IMemberOptions from '../interfaces/MemberOptions'

/**
 * Member class
 *
 * Represents a Glitch project's member.
 * It vares from [[User]] class, so if you want to see all fields the user has, check [[User]]
 * @class
 */
export default class Member {
  /**
   * User ID
   */
  id: number
  /**
   * User access level in the project
   */
  accessLevel: number
  constructor(options: Partial<IMemberOptions>) {
    this.id = options.userId
    this.accessLevel = options.accessLevel
  }
}
