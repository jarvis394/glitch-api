import Feature from './Feature'

/**
 * User class
 *
 * @class 
 */
export default class User {
  id: any
  login: any
  name: any
  descrtiption: any
  description: any
  location: any
  thanksCount: any
  utcOffset: any
  color: any
  hasCoverImage: any
  coverColor: any
  avatarUrl: any
  avatarThumbnailUrl: any
  createdAt: Date
  updatedAt: Date
  featuredProjectId: any
  isSupport: any
  isInfrastructureUser: any
  features: any
  constructor(options: User) {
    /**
     * User ID
     */
    this.id = options.id
    
    /**
     * User login
     */
    this.login = options.login
    
    /**
     * User name
     */
    this.name = options.name
    
    /**
     * User profile description
     */
    this.descrtiption = options.description
    
    /**
     * User location
     */
    this.location = options.location
    
    /**
     * User thanks count
     */
    this.thanksCount = options.thanksCount
    
    /**
     * Uset time offset from UTC
     */
    this.utcOffset = options.utcOffset
    
    /**
     * User profile color
     */
    this.color = options.color
    
    /**
     * Does user have a cover image
     */
    this.hasCoverImage = options.hasCoverImage
    
    /**
     * User cover color
     */
    this.coverColor = options.coverColor
    
    /**
     * User avatar URL
     */
    this.avatarUrl = options.avatarUrl
    
    /**
     * User avatar thumbnail URL
     */
    this.avatarThumbnailUrl = options.avatarThumbnailUrl
    
    /**
     * Date when user was created
     */
    this.createdAt = new Date(options.createdAt)
    
    /**
     * Date when user was updated
     */
    this.updatedAt = new Date(options.updatedAt)
    
    /**
     * User's featured project ID
     */
    this.featuredProjectId = options.featuredProjectId
    
    /**
     * Is user a support user
     */
    this.isSupport = options.isSupport
    
    /**
     * Is user an infrastructure user
     */
    this.isInfrastructureUser = options.isInfrastructureUser
    
    /**
     * User features
     */
    this.features = options.features ? options.features.map((feature: Feature) => new Feature(feature)) : []
  }
}
