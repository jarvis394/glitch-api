/**
 * Team class
 *
 * @class
 */
class Team {
  constructor(options) {
    const Member = require('./Member')
    const Feature = require('./Feature')

    /**
     * Team ID
     */
    this.id = options.id
    
    /**
     * Team description
     */
    this.description = options.description
    
    /**
     * Team URL
     */
    this.url = options.url
    
    /**
     * Team name
     */
    this.name = options.name
    
    /**
     * Does team have an avatar image
     */
    this.hasAvatarImage = options.hasAvatarImage
    
    /**
     * Team cover color on page
     */
    this.coverColor = options.coverColor
    
    /**
     * Team background color on page
     */
    this.backgroundColor = options.backgroundColor
    
    /**
     * Does team have a cover image
     */ 
    this.hasCoverImage = options.hasCoverImage
    
    /**
     * Team location
     */
    this.location = options.location
    
    /**
     * Is team verified by Glitch
     */
    this.isVerified = options.isVerified
    
    /**
     * Team whitelisted domain
     */
    this.whitelistedDomain = options.whitelistedDomain
    
    /**
     * Team featured project ID
     */
    this.featuredProjectId = options.featuredProjectId
    
    /**
     * Date when team was created
     */
    this.createdAt = new Date(options.createdAt)
    
    /**
     * Date when team was updated
     */
    this.updatedAt = new Date(options.updatedAt)
    
    /**
     * Team members permissions
     */
    this.teamPermissions = options.teamPermissions ? options.teamPermissions.map(member => new Member(member)) : []
    
    /**
     * Team features list
     */
    this.features = options.features ? options.features.map(feature => new Feature(feature)) : []
  }
}

module.exports = Team