## glitch-api

A Node.js module that allows you to easily interact with the Glitch API

| 📖 [Documentation](https://github.com/jarvis394/glitch-api/tree/master/docs/) | ✨ [Examples](https://github.com/jarvis394/glitch-api/tree/master/docs/examples/) |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |

## Features

- 99% coverage of the **known** Glitch API
- Using **TypeScript** that provides hints in editor (and more)
- Support for authorization
- Class abstraction
- Works with both API versions

###### _Warning: this module uses unstable API that hasn't been officially released yet. Described only world-open methods from [this unofficial site](https://glitchapi.glitch.me) and my researches_

## Installation

> **[Node.js](https://nodejs.org/) 8.0.0 or newer is required**

### NPM

```
npm i glitch-api -s
```

## Example usage

```javascript
// Using ES6 syntax
import { Glitch } from 'glitch-api'

// Fancy-style
const { Glitch } = require('glitch-api')

// Init main class
const glitch = new Glitch({ token: 'xxx' })
const { api } = glitch

// Get a user profile
api.users.get({ id: 1 }).then(user => {
  console.log(user); // → User
})
```

## Q&A

— Why \*api-method\* is not implemented?

Because I'm also human and I might not have seen the recent changes in Glitch's API.
Anyway, PR are open for anyone :)

— The \*api-method\* is not working.

It could be that Glitch devs removed the support for that method. Or it's just a my fault.
Open a new issue and describe what's happend.

## Contribution

Feel free to open new Pull request or an issue!

You can contact me in DM:

- VK: **[@tarnatovski](https://vk.com/tarnatovski)**
- git: **[@jarvis394](https://github.com/jarvis394)**
