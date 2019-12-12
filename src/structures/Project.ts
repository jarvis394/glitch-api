import ProjectMember from './Member'
import Feature from './Feature'

/**
 * Project class
 *
 * @class
 */
export default class Project {
  constructor(options) {
    /**
     * Project ID
     */
    this.id = options.id

    /**
     * Project description
     */
    this.description = options.description

    /**
     * Project domain
     */
    this.domain = options.domain

    /**
     * Project base ID
     */
    this.baseId = options.baseId

    /**
     * Is project private
     */
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
      ? options.permissions.map(member => new ProjectMember(member))
      : []

    /**
     * Project features
     */
    this.features = options.features
      ? options.features.map(feature => new Feature(feature))
      : []

    /**
     * Project teams IDs
     */
    this.teamIds = options.teamIds
  }
}
