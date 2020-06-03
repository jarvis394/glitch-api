const { Glitch } = require('../../src')
const glitch = new Glitch({ token: process.env.TOKEN })
const { api } = glitch

// 
// If you don't have a token, you can use glitch.setAnonToken() method
// You won't able to do any operations without a token
// For more information, check anonymous.js in docs/ folder:
// 

// Get user profile
api.users.get({ id: 1 }).then(user => console.log(user)) // → User

// Get project data
api.projects.get({ domain: 'glapi' }).then(project => console.log(project)) // → Project
