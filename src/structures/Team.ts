import Member from './Member'
import Feature from './Feature'

/**
 * Team class
 *
 * Represents a Glitch team
 * @class
 */
export default class Team {
  /**
   * Team ID
   */
  id: number
  /**
   * Team description
   */
  description?: string
  /**
   * Team URL domain
   * It is a URL domain for team's page
   */
  url: string
  /**
   * Team name
   * It shows in a team's page
   */
  name: string
  /**
   * Shows whether the team has an avatar image
   */
  hasAvatarImage: boolean
  /**
   * Represents cover color in `rgb()` format
   */
  coverColor: string
  /**
   * Represents background color in `rgb()` format
   */
  backgroundColor: string
  /**
   * Shows whether the team has a cover image
   */
  hasCoverImage: boolean
  /**
   * Team location
   */
  location?: string
  /**
   * Show whether the team is verified by Glitch team
   */
  isVerified: boolean
  /**
   * Allowed domain for the team
   */
  whitelistedDomain?: string
  /**
   * ID of the featured project
   */
  featuredProjectId?: string
  /**
   * Date when the team was created
   */
  createdAt: Date
  /**
   * Date when the team was last updated
   */
  updatedAt: Date
  /**
   * List of team's members
   */
  teamPermissions: Member[]
  /**
   * List of team's features
   */

  features: Feature[]
  constructor(options: Team) {
    this.id = options.id
    this.description = options.description
    this.url = options.url
    this.name = options.name
    this.hasAvatarImage = options.hasAvatarImage
    this.coverColor = options.coverColor
    this.backgroundColor = options.backgroundColor
    this.hasCoverImage = options.hasCoverImage
    this.location = options.location
    this.isVerified = options.isVerified
    this.whitelistedDomain = options.whitelistedDomain
    this.featuredProjectId = options.featuredProjectId
    this.createdAt = new Date(options.createdAt)
    this.updatedAt = new Date(options.updatedAt)
    this.teamPermissions = options.teamPermissions
      ? options.teamPermissions.map((member: Member) => new Member(member))
      : []
    this.features = options.features
      ? options.features.map((feature: Feature) => new Feature(feature))
      : []
  }
}
