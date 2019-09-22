const { Glitch } = require('../src')
const glitch = new Glitch({ token: process.env.TOKEN })
const { api } = glitch

api.projects.remix({ id: process.env.GLITCH_PRJ_ID }).then(remix => {
  console.log(remix.inviteLink)
})
