## glitch-api

A Node.js module that allows you to easily interact with the Glitch API

| 📖 [Documentation](https://github.com/jarvis394/glitch-api/tree/master/docs/) | ✨ [Examples](https://github.com/jarvis394/glitch-api/tree/master/docs/examples/) |
|---|---|

## Features
- 100% coverage of the **known** Glitch API
- Support for authorization
- Class abstraction
- Works with both API versions

###### *Warning: this module uses unstable API that hasn't been officially released yet. Described only world-open methods from [this unofficial site](https://glitchapi.glitch.me) and my researches*

## Installation
> **[Node.js](https://nodejs.org/) 12.0.0 or newer is required**  

### NPM
```
npm i glitch-api -s
```

## Example usage
```javascript
const { Glitch } = require('glitch-api')
const glitch = new Glitch({ token: 'xxx' })
const { api } = glitch

api.users.get({ id: 1 }).then(user => {
  console.log(user) // User<Object>
})
```

## Contribution

Feel free to open new Pull request or an issue!

You can contact me in DM: 
- VK: **[@tarnatovski](https://vk.com/tarnatovski)**
- git: **[@jarvis394](https://github.com/jarvis394)**
