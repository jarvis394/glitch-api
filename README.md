## glitch-api

[![GitHub package.json dynamic](https://img.shields.io/github/package-json/version/jarvis394/glitch-api)](https://www.npmjs.com/package/glitch-api)
[![CircleCI](https://circleci.com/gh/jarvis394/glitch-api/tree/master.svg?style=shield)](https://circleci.com/gh/jarvis394/glitch-api/tree/master)
[![npm bundle size](https://img.shields.io/bundlephobia/min/glitch-api?label=size)](https://www.npmjs.com/package/glitch-api)

A Node.js module that allows you to easily interact with the Glitch API

| 📖 [Documentation](https://glapi.ml/globals) | ✨ [Examples](https://github.com/jarvis394/glitch-api/tree/master/docs/examples/) |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |

## Features

- 99% coverage of the **known** Glitch API
- Uses **TypeScript** that provides hints in editor, type checking, etc.
- **Supports WebSocket connection to the Glitch editor**
- Support for authorization
- Only two dependencies: `node-fetch` and `algoliasearch`
- Class abstraction
- Works with both API versions

###### _Warning: this module uses unstable API that hasn't been officially released yet. Described only world-open methods from [this unofficial site](https://glitchapi.glitch.me) and my researches_

## Installation

> **[Node.js](https://nodejs.org/) 8.0.0 or newer is required**

##### NPM

```
npm i glitch-api -s
```

## Example usage

```javascript
// Require using ES6 syntax
import { Glitch } from 'glitch-api'

// Or using old fancy style
const { Glitch } = require('glitch-api')

// Init main class
const glitch = new Glitch({ token: 'xxx' })  // Put here your Glitch token or use glitch.setAnonToken()
const { api } = glitch

// Get a user profile
api.users.get({ id: 1 }).then(user => console.log) // → User
```

## ❗ Migration from 2.x to 3.x

- Any search method now follows the same syntax:
  ```
  .search(s: string) → Algolia result
  ```
- Remixing a project doesn't return `joinLink`. Now it is a `Project` instance. Consider getting project data with token via `api.projects.get()`
- Token is absolutely required. If you don't have a token, consider using `Glitch.setAnonToken()`. For more info, see [examples/anonymous.js](https://github.com/jarvis394/glitch-api/blob/master/docs/examples/anonymous.js)

## Q&A

### How do I get Glitch token?

Paste the following code to the browser's console on the Glitch editor page:

```javascript
(JSON.parse(localStorage.getItem('cachedUser'))).persistentToken
```

Also you can use `Glitch.setAnonToken() → Promise<string>` method to login as an anonymous user and use its token.

___
### Why *\*api-method\** is not implemented?

Because I'm also human and I might not have seen the recent changes in Glitch's API.
Anyway, PRs are open for anyone :)

___
### The *\*api-method\** is not working.

It could be that Glitch devs removed the support for that method. Or it's just a my fault.
Open a new issue and describe what's happend.

## Contribution

Feel free to open new Pull request or an issue!

## Credits

Made by jarvis394 with ♥️

- VK: **[@tarnatovski](https://vk.com/tarnatovski)**
- git: **[@jarvis394](https://github.com/jarvis394)**
