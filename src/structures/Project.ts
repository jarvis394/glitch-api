import ProjectMember from './Member'
import Feature from './Feature'
import Member from './Member'
import IMemberOptions from '../interfaces/MemberOptions'

/**
 * Project class
 *
 * Represents a Glitch project
 * @class
 */
export default class Project {
  /**
   * Project ID
   */
  id: string
  /**
   * Project description
   */
  description?: string
  /**
   * Project domain name
   */
  domain: string
  /**
   * Project base ID
   * Shows the ID of project it was remixed from
   */
  baseId?: string
  /**
   * Shows whether the project is private or not
   */
  private: boolean
  /**
   * Project likes count
   */
  likesCount: number
  /**
   * Shows whether the project is suspended or not
   */
  isSuspended: boolean
  /**
   * If the project is suspended, then it represents the reason of the suspension
   */
  suspendedReason?: string
  /**
   * Date when the project avatar was last updated
   */
  avatarUpdatedAt: Date
  /**
   * Shows whether the project should be shown as glitch team's
   */
  showAsGlitchTeam: boolean
  /**
   * Shows whether the project could be only in the embedded form
   */
  isEmbedOnly: boolean
  /**
   * Project's remix chain
   */
  remixChain: string[]
  /**
   * Shows whether the project is not safe for kids
   */
  notSafeForKids: boolean
  /**
   * Date when the project was created
   */
  createdAt: Date
  /**
   * Date when the project was updated
   */
  updatedAt: Date
  /**
   * List of project members (see [[Member]])
   */
  permissions?: Member[]
  /**
   * Project features (see [[Feature]])
   */
  features?: Feature[]
  /**
   * IDs of teams the project is in
   */
  teamIds?: number[]
  constructor(options: Project) {
    this.id = options.id
    this.description = options.description
    this.domain = options.domain
    this.baseId = options.baseId
    this.private = options.private
    this.likesCount = options.likesCount
    this.isSuspended = !!options.suspendedReason
    this.suspendedReason = options.suspendedReason
    this.avatarUpdatedAt = new Date(options.avatarUpdatedAt)
    this.showAsGlitchTeam = options.showAsGlitchTeam
    this.isEmbedOnly = options.isEmbedOnly
    this.remixChain = options.remixChain
    this.notSafeForKids = options.notSafeForKids
    this.createdAt = new Date(options.createdAt)
    this.updatedAt = new Date(options.updatedAt)
    this.permissions = options.permissions
      ? options.permissions.map(
          (member: IMemberOptions) => new ProjectMember(member)
        )
      : []
    this.features = options.features
      ? options.features.map((feature: Feature) => new Feature(feature))
      : []
    this.teamIds = options.teamIds
  }
}
