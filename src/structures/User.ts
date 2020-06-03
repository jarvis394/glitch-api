import Feature from './Feature'

/**
 * User class
 *
 * Represents a Glitch user
 * @class
 */
export default class User {
  /**
   * User ID
   */
  id: number
  /**
   * User login
   */
  login: string
  /**
   * User name
   */
  name: string
  /**
   * User page description
   */
  description?: string
  /**
   * User location
   * ex. Ferndale, WA
   */
  location?: string
  /**
   * User thanks count
   */
  thanksCount: number
  /**
   * User's UTC offset
   */
  utcOffset: number
  /**
   * User color represented in HEX format
   */
  color: string
  /**
   * Shows whether the user has a cover image
   */
  hasCoverImage: boolean
  /**
   * User's cover color represented in HEX format
   */
  coverColor: string
  /**
   * User's avatar URL
   */
  avatarUrl: string
  /**
   * User's avatar thumbnail URL
   */
  avatarThumbnailUrl: string
  /**
   * Date when the user was created
   */
  createdAt: Date
  /**
   * Date when the user was last updated
   */
  updatedAt: Date
  /**
   * User's featured project id
   */
  featuredProjectId?: string
  /**
   * Shows whether the user is a support user
   */
  isSupport: boolean
  /**
   * Shows whether the user is an infrastructure user
   */
  isInfrastructureUser: boolean
  /**
   * List of user's features
   */
  features: Feature[]
  /**
   * Users's persistent token
   */
  persistentToken?: string
  googleId?: string
  googleToken?: string
  slackId?: string
  slackToken?: string
  slackTeamId?: string
  facebookId?: string
  facebookToken?: string
  githubId?: string
  githubToken?: string
  passwordEnabled?: boolean
  loginAttempts?: number
  accountLocked?: boolean
  twoFactorEnabled?: boolean
  constructor(options: Partial<User>) {
    this.id = options.id
    this.login = options.login
    this.name = options.name
    this.description = options.description
    this.location = options.location
    this.thanksCount = options.thanksCount
    this.utcOffset = options.utcOffset
    this.color = options.color
    this.hasCoverImage = options.hasCoverImage
    this.coverColor = options.coverColor
    this.avatarUrl = options.avatarUrl
    this.avatarThumbnailUrl = options.avatarThumbnailUrl
    this.createdAt = new Date(options.createdAt)
    this.updatedAt = new Date(options.updatedAt)
    this.featuredProjectId = options.featuredProjectId
    this.isSupport = options.isSupport
    this.isInfrastructureUser = options.isInfrastructureUser
    this.features = options.features
      ? options.features.map((feature: Feature) => new Feature(feature))
      : []
  }
}
