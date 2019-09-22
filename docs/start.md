## Installation
> **[Node.js](https://nodejs.org/) 8.0.0 or newer is required**  

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