<a name="API"></a>

## API
API class

**Kind**: global class  

* [API](#API)
    * [new API(glitch)](#new_API_new)
    * [.users](#API+users)
    * [.projects](#API+projects)
    * [.teams](#API+teams)
    * [.callWithRequest(request)](#API+callWithRequest) ⇒ <code>Promise</code>
    * [.worker()](#API+worker)
    * [.enqueue(method, params, requestParams)](#API+enqueue) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.callMethod(request)](#API+callMethod)

<a name="new_API_new"></a>

### new API(glitch)
API constructor


| Param | Type | Description |
| --- | --- | --- |
| glitch | [<code>Glitch</code>](#Glitch) | Glitch instance |

<a name="API+users"></a>

### apI.users
Users methods

**Kind**: instance property of [<code>API</code>](#API)  
<a name="API+projects"></a>

### apI.projects
Projects methods

**Kind**: instance property of [<code>API</code>](#API)  
<a name="API+teams"></a>

### apI.teams
Teams methods

**Kind**: instance property of [<code>API</code>](#API)  
<a name="API+callWithRequest"></a>

### apI.callWithRequest(request) ⇒ <code>Promise</code>
Adds request for queue

**Kind**: instance method of [<code>API</code>](#API)  

| Param | Type | Description |
| --- | --- | --- |
| request | [<code>Request</code>](#Request) | Request to call |

<a name="API+worker"></a>

### apI.worker()
Runs queue

**Kind**: instance method of [<code>API</code>](#API)  
<a name="API+enqueue"></a>

### apI.enqueue(method, params, requestParams) ⇒ <code>Promise.&lt;Object&gt;</code>
Adds method to queue

**Kind**: instance method of [<code>API</code>](#API)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | Method to execute |
| params | <code>Object</code> | Parameters for method |
| requestParams | <code>Object</code> | Params for request |
| requestParams.method | <code>string</code> | Method for request |
| requestParams.oldApi | <code>string</code> | Use old API url state |

<a name="API+callMethod"></a>

### apI.callMethod(request)
Calls the API method

**Kind**: instance method of [<code>API</code>](#API)  

| Param | Type | Description |
| --- | --- | --- |
| request | [<code>Request</code>](#Request) | Request to call |

<a name="Glitch"></a>

## Glitch
**Kind**: global class  

* [Glitch](#Glitch)
    * [new Glitch(options)](#new_Glitch_new)
    * [.api](#Glitch+api)
    * [.token](#Glitch+token) ⇒ <code>string</code>
    * [.PACKAGE_VERSION](#Glitch+PACKAGE_VERSION)

<a name="new_Glitch_new"></a>

### new Glitch(options)
Glitch constructor


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.token | <code>string</code> | User Glitch API authorization token |
| options.apiTimeout | <code>number</code> | Timeout for requests |
| options.apiHeaders | <code>Object</code> | Headers for requests |
| options.apiBaseUrl | <code>string</code> | Specific base URL for API |
| options.apiBaseUrlOld | <code>string</code> | Specific base URL for old API |

<a name="Glitch+api"></a>

### glitch.api
Glitch API class

**Kind**: instance property of [<code>Glitch</code>](#Glitch)  
<a name="Glitch+token"></a>

### glitch.token ⇒ <code>string</code>
Returns user token

**Kind**: instance property of [<code>Glitch</code>](#Glitch)  
<a name="Glitch+PACKAGE_VERSION"></a>

### glitch.PACKAGE\_VERSION
Returns package version

**Kind**: instance property of [<code>Glitch</code>](#Glitch)  
<a name="Projects"></a>

## Projects
**Kind**: global class  

* [Projects](#Projects)
    * [new Projects(api)](#new_Projects_new)
    * [.get(params)](#Projects+get)
    * [.search(params)](#Projects+search)
    * [.questions()](#Projects+questions)
    * [.remix(params)](#Projects+remix)

<a name="new_Projects_new"></a>

### new Projects(api)
Projects constructor


| Param | Type | Description |
| --- | --- | --- |
| api | [<code>API</code>](#API) | API instance |

<a name="Projects+get"></a>

### projects.get(params)
Gets project by id or domain

**Kind**: instance method of [<code>Projects</code>](#Projects)  

| Param | Type |
| --- | --- |
| params | <code>Object</code> | 
| params.id | <code>string</code> | 
| params.domain | <code>string</code> | 

<a name="Projects+search"></a>

### projects.search(params)
Searches project by query

**Kind**: instance method of [<code>Projects</code>](#Projects)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> |  |
| params.q | <code>string</code> | Query |

<a name="Projects+questions"></a>

### projects.questions()
Gets project's questions

**Kind**: instance method of [<code>Projects</code>](#Projects)  
<a name="Projects+remix"></a>

### projects.remix(params)
Remixes project

**Kind**: instance method of [<code>Projects</code>](#Projects)  

| Param | Type |
| --- | --- |
| params | <code>Object</code> | 
| [params.id|params.domain] | <code>string</code> | 

<a name="Request"></a>

## Request
Request class

**Kind**: global class  
<a name="new_Request_new"></a>

### new Request(method, params, requestParams)
Request constructor


| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | Method to run |
| params | <code>Object</code> | Parameters for method |
| requestParams | <code>Object</code> | Parameters for request |

<a name="Teams"></a>

## Teams
**Kind**: global class  

* [Teams](#Teams)
    * [new Teams(api)](#new_Teams_new)
    * [.get(params)](#Teams+get)
    * [.search(params)](#Teams+search)

<a name="new_Teams_new"></a>

### new Teams(api)
Teams constructor


| Param | Type | Description |
| --- | --- | --- |
| api | [<code>API</code>](#API) | API instance |

<a name="Teams+get"></a>

### teams.get(params)
Gets project by url

**Kind**: instance method of [<code>Teams</code>](#Teams)  

| Param | Type |
| --- | --- |
| params | <code>Object</code> | 
| params.url | <code>string</code> | 
| params.id | <code>string</code> | 

<a name="Teams+search"></a>

### teams.search(params)
Search team by query

**Kind**: instance method of [<code>Teams</code>](#Teams)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> |  |
| params.q | <code>string</code> | Query |

<a name="Users"></a>

## Users
**Kind**: global class  

* [Users](#Users)
    * [new Users(api)](#new_Users_new)
    * [.get(params)](#Users+get)
    * [.search(params)](#Users+search)

<a name="new_Users_new"></a>

### new Users(api)
Users constructor


| Param | Type | Description |
| --- | --- | --- |
| api | [<code>API</code>](#API) | API class |

<a name="Users+get"></a>

### users.get(params)
Gets user by id or login

**Kind**: instance method of [<code>Users</code>](#Users)  

| Param | Type |
| --- | --- |
| params | <code>Object</code> | 
| params.id | <code>number</code> | 
| params.login | <code>string</code> | 

<a name="Users+search"></a>

### users.search(params)
Search user by query

**Kind**: instance method of [<code>Users</code>](#Users)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> |  |
| params.q | <code>string</code> | Query |

<a name="Feature"></a>

## Feature
Feature class

**Kind**: global class  

* [Feature](#Feature)
    * [new Feature()](#new_Feature_new)
    * [.id](#Feature+id)
    * [.name](#Feature+name)
    * [.data](#Feature+data)
    * [.expiresAt](#Feature+expiresAt)

<a name="new_Feature_new"></a>

### new Feature()
Feature constructor

<a name="Feature+id"></a>

### feature.id
Feature ID

**Kind**: instance property of [<code>Feature</code>](#Feature)  
<a name="Feature+name"></a>

### feature.name
Feature name

**Kind**: instance property of [<code>Feature</code>](#Feature)  
<a name="Feature+data"></a>

### feature.data
Feature data

**Kind**: instance property of [<code>Feature</code>](#Feature)  
<a name="Feature+expiresAt"></a>

### feature.expiresAt
Date when feature expires

**Kind**: instance property of [<code>Feature</code>](#Feature)  
<a name="Member"></a>

## Member
Member class

**Kind**: global class  

* [Member](#Member)
    * [.id](#Member+id)
    * [.accessLevel](#Member+accessLevel)

<a name="Member+id"></a>

### member.id
User ID

**Kind**: instance property of [<code>Member</code>](#Member)  
<a name="Member+accessLevel"></a>

### member.accessLevel
User access level

**Kind**: instance property of [<code>Member</code>](#Member)  
<a name="Project"></a>

## Project
Project class

**Kind**: global class  

* [Project](#Project)
    * [.description](#Project+description)
    * [.domain](#Project+domain)
    * [.baseId](#Project+baseId)
    * [.private](#Project+private)
    * [.likesCount](#Project+likesCount)
    * [.isSuspended](#Project+isSuspended)
    * [.suspendedReason](#Project+suspendedReason)
    * [.avatarUpdatedAt](#Project+avatarUpdatedAt)
    * [.showAsGlitchTeam](#Project+showAsGlitchTeam)
    * [.isEmbedOnly](#Project+isEmbedOnly)
    * [.remixChain](#Project+remixChain)
    * [.notSafeForKids](#Project+notSafeForKids)
    * [.createdAt](#Project+createdAt)
    * [.updatedAt](#Project+updatedAt)
    * [.permissions](#Project+permissions)
    * [.features](#Project+features)
    * [.teamIds](#Project+teamIds)

<a name="Project+description"></a>

### project.description
Project description

**Kind**: instance property of [<code>Project</code>](#Project)  
<a name="Project+domain"></a>

### project.domain
Project domain

**Kind**: instance property of [<code>Project</code>](#Project)  
<a name="Project+baseId"></a>

### project.baseId
Project base ID

**Kind**: instance property of [<code>Project</code>](#Project)  
<a name="Project+private"></a>

### project.private
Is project private

**Kind**: instance property of [<code>Project</code>](#Project)  
<a name="Project+likesCount"></a>

### project.likesCount
Project likes count

**Kind**: instance property of [<code>Project</code>](#Project)  
<a name="Project+isSuspended"></a>

### project.isSuspended
Is project suspended

**Kind**: instance property of [<code>Project</code>](#Project)  
<a name="Project+suspendedReason"></a>

### project.suspendedReason
Suspended reason

**Kind**: instance property of [<code>Project</code>](#Project)  
<a name="Project+avatarUpdatedAt"></a>

### project.avatarUpdatedAt
Date when project avatar was last updated

**Kind**: instance property of [<code>Project</code>](#Project)  
<a name="Project+showAsGlitchTeam"></a>

### project.showAsGlitchTeam
Show as glitch team state

**Kind**: instance property of [<code>Project</code>](#Project)  
<a name="Project+isEmbedOnly"></a>

### project.isEmbedOnly
Is project only an embed

**Kind**: instance property of [<code>Project</code>](#Project)  
<a name="Project+remixChain"></a>

### project.remixChain
Project remix chain

**Kind**: instance property of [<code>Project</code>](#Project)  
<a name="Project+notSafeForKids"></a>

### project.notSafeForKids
Is project not safe for kids

**Kind**: instance property of [<code>Project</code>](#Project)  
<a name="Project+createdAt"></a>

### project.createdAt
Date when project was created

**Kind**: instance property of [<code>Project</code>](#Project)  
<a name="Project+updatedAt"></a>

### project.updatedAt
Date when project was last updated

**Kind**: instance property of [<code>Project</code>](#Project)  
<a name="Project+permissions"></a>

### project.permissions
Project permissions

**Kind**: instance property of [<code>Project</code>](#Project)  
<a name="Project+features"></a>

### project.features
Project features

**Kind**: instance property of [<code>Project</code>](#Project)  
<a name="Project+teamIds"></a>

### project.teamIds
Project teams IDs

**Kind**: instance property of [<code>Project</code>](#Project)  
<a name="Team"></a>

## Team
Team class

**Kind**: global class  

* [Team](#Team)
    * [.description](#Team+description)
    * [.url](#Team+url)
    * [.name](#Team+name)
    * [.hasAvatarImage](#Team+hasAvatarImage)
    * [.coverColor](#Team+coverColor)
    * [.backgroundColor](#Team+backgroundColor)
    * [.hasCoverImage](#Team+hasCoverImage)
    * [.location](#Team+location)
    * [.isVerified](#Team+isVerified)
    * [.whitelistedDomain](#Team+whitelistedDomain)
    * [.featuredProjectId](#Team+featuredProjectId)
    * [.createdAt](#Team+createdAt)
    * [.updatedAt](#Team+updatedAt)
    * [.teamPermissions](#Team+teamPermissions)
    * [.features](#Team+features)

<a name="Team+description"></a>

### team.description
Team description

**Kind**: instance property of [<code>Team</code>](#Team)  
<a name="Team+url"></a>

### team.url
Team URL

**Kind**: instance property of [<code>Team</code>](#Team)  
<a name="Team+name"></a>

### team.name
Team name

**Kind**: instance property of [<code>Team</code>](#Team)  
<a name="Team+hasAvatarImage"></a>

### team.hasAvatarImage
Does team have an avatar image

**Kind**: instance property of [<code>Team</code>](#Team)  
<a name="Team+coverColor"></a>

### team.coverColor
Team cover color on page

**Kind**: instance property of [<code>Team</code>](#Team)  
<a name="Team+backgroundColor"></a>

### team.backgroundColor
Team background color on page

**Kind**: instance property of [<code>Team</code>](#Team)  
<a name="Team+hasCoverImage"></a>

### team.hasCoverImage
Does team have a cover image

**Kind**: instance property of [<code>Team</code>](#Team)  
<a name="Team+location"></a>

### team.location
Team location

**Kind**: instance property of [<code>Team</code>](#Team)  
<a name="Team+isVerified"></a>

### team.isVerified
Is team verified by Glitch

**Kind**: instance property of [<code>Team</code>](#Team)  
<a name="Team+whitelistedDomain"></a>

### team.whitelistedDomain
Team whitelisted domain

**Kind**: instance property of [<code>Team</code>](#Team)  
<a name="Team+featuredProjectId"></a>

### team.featuredProjectId
Team featured project ID

**Kind**: instance property of [<code>Team</code>](#Team)  
<a name="Team+createdAt"></a>

### team.createdAt
Date when team was created

**Kind**: instance property of [<code>Team</code>](#Team)  
<a name="Team+updatedAt"></a>

### team.updatedAt
Date when team was updated

**Kind**: instance property of [<code>Team</code>](#Team)  
<a name="Team+teamPermissions"></a>

### team.teamPermissions
Team members permissions

**Kind**: instance property of [<code>Team</code>](#Team)  
<a name="Team+features"></a>

### team.features
Team features list

**Kind**: instance property of [<code>Team</code>](#Team)  
<a name="User"></a>

## User
User class

**Kind**: global class  

* [User](#User)
    * [.login](#User+login)
    * [.name](#User+name)
    * [.descrtiption](#User+descrtiption)
    * [.location](#User+location)
    * [.thanksCount](#User+thanksCount)
    * [.utcOffset](#User+utcOffset)
    * [.color](#User+color)
    * [.hasCoverImage](#User+hasCoverImage)
    * [.coverColor](#User+coverColor)
    * [.avatarUrl](#User+avatarUrl)
    * [.avatarThumbnailUrl](#User+avatarThumbnailUrl)
    * [.createdAt](#User+createdAt)
    * [.updatedAt](#User+updatedAt)
    * [.featuredProjectId](#User+featuredProjectId)
    * [.isSupport](#User+isSupport)
    * [.isInfrastructureUser](#User+isInfrastructureUser)
    * [.features](#User+features)

<a name="User+login"></a>

### user.login
User login

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+name"></a>

### user.name
User name

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+descrtiption"></a>

### user.descrtiption
User profile description

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+location"></a>

### user.location
User location

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+thanksCount"></a>

### user.thanksCount
User thanks count

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+utcOffset"></a>

### user.utcOffset
Uset time offset from UTC

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+color"></a>

### user.color
User profile color

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+hasCoverImage"></a>

### user.hasCoverImage
Does user have a cover image

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+coverColor"></a>

### user.coverColor
User cover color

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+avatarUrl"></a>

### user.avatarUrl
User avatar URL

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+avatarThumbnailUrl"></a>

### user.avatarThumbnailUrl
User avatar thumbnail URL

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+createdAt"></a>

### user.createdAt
Date when user was created

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+updatedAt"></a>

### user.updatedAt
Date when user was updated

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+featuredProjectId"></a>

### user.featuredProjectId
User's featured project ID

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+isSupport"></a>

### user.isSupport
Is user a support user

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+isInfrastructureUser"></a>

### user.isInfrastructureUser
Is user an infrastructure user

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+features"></a>

### user.features
User features

**Kind**: instance property of [<code>User</code>](#User)  
<a name="API_BASE_URL"></a>

## API\_BASE\_URL
Glitch API v1 base url

**Kind**: global constant  
<a name="API_BASE_URL_OLD"></a>

## API\_BASE\_URL\_OLD
Glitch API old base url

**Kind**: global constant  
