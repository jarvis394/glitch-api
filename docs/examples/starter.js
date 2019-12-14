const { Glitch } = require('../../src')
const glitch = new Glitch({ token: process.env.TOKEN })
const { api } = glitch

// Get a user profile
api.users.get({ id: 1 }).then(user => console.log(user)) // → User
api.projects.get({ domain: 'glapi' }).then(project => console.log(project)) // → Project
