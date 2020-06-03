const { Glitch } = require('../../src')
const util = require('util')
const glitch = new Glitch({ token: '3cb6d1bf-7802-4d5f-be3f-302f30d8de72' })
const { api } = glitch

// Pretty logging to not to blow up your terminal with data ;)
const log = res =>
  console.log(util.inspect(res, { showHidden: false, depth: 1 }))

// Search users (jarvis394 is a main developer of this lib - say hello!)
api.users.search('jarvis394').then(result => log(result))

// Search projects
api.projects.search('glapi').then(result => log(result))

// Search teams
api.teams.search('hello-express').then(result => log(result))
