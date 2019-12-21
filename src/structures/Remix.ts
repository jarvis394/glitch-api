/**
 * Remix class
 *
 * Represents a Glitch project remix
 * @class
 */
export default class Remix {
  /**
   * Remixed project ID
   */
  id: string
  /**
   * Remixed project domain (see [[Project.domain]])
   */
  domain: string
  /**
   * Token used to join to the remixed project
   */
  inviteToken: string
  /**
   * Link to join to the remixed project
   */
  joinLink: string
  constructor(options: Remix) {
    this.id = options.id
    this.domain = options.domain
    this.inviteToken = options.inviteToken
    this.joinLink = options.joinLink
  }
}
