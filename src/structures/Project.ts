import ProjectMember from './Member'
import Feature from './Feature'
import Member from './Member'

/**
 * Project class
 *
 * @class
 */
export default class Project {
  /**
   * Project ID
   * Example: 016af9e7-d077-4854-83f3-b0863c88ba35
   */
  id: string
  /**
   * Project description
   */
  description?: string
  /**
   * Project domain
   */
  domain: string
  /**
   * Project base ID
   */
  baseId?: string
  /**
   * Shows whether the project is private or not
   */
  private: boolean
  likesCount: number
  isSuspended: boolean
  suspendedReason?: string
  avatarUpdatedAt: Date
  showAsGlitchTeam: boolean
  isEmbedOnly: boolean
  remixChain: string
  notSafeForKids: any
  createdAt: Date
  updatedAt: Date
  permissions: any
  features: any
  teamIds: any
  constructor(options: Project) {
    this.id = options.id

    this.description = options.description

    this.domain = options.domain

    this.baseId = options.baseId

    this.private = options.private

    /**
     * Project likes count
     */
    this.likesCount = options.likesCount

    /**
     * Is project suspended
     */
    this.isSuspended = !!options.suspendedReason

    /**
     * Suspended reason
     */
    this.suspendedReason = options.suspendedReason

    /**
     * Date when project avatar was last updated
     */
    this.avatarUpdatedAt = new Date(options.avatarUpdatedAt)

    /**
     * Show as glitch team state
     */
    this.showAsGlitchTeam = options.showAsGlitchTeam

    /**
     * Is project only an embed
     */
    this.isEmbedOnly = options.isEmbedOnly

    /**
     * Project remix chain
     */
    this.remixChain = options.remixChain

    /**
     * Is project not safe for kids
     */
    this.notSafeForKids = options.notSafeForKids

    /**
     * Date when project was created
     */
    this.createdAt = new Date(options.createdAt)

    /**
     * Date when project was last updated
     */
    this.updatedAt = new Date(options.updatedAt)

    /**
     * Project permissions
     */
    this.permissions = options.permissions
      ? options.permissions.map((member: Member) => new ProjectMember(member))
      : []

    /**
     * Project features
     */
    this.features = options.features
      ? options.features.map((feature: Feature) => new Feature(feature))
      : []

    /**
     * Project teams IDs
     */
    this.teamIds = options.teamIds
  }
}
