const { Glitch } = require('../../src')
const glitch = new Glitch() // Let's not put a token here
const { api } = glitch

// Magically get a token as an anonymous user
glitch.setAnonToken().then(() => {
  // Searching now works!
  api.users.search('jarvis394').then(users => console.log(users.hits[0]))
})
