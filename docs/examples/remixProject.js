const { Glitch } = require('glitch-api')
const glitch = new Glitch({ token: process.env.TOKEN })
const { api } = glitch

// Remix project and retrieve the project invite link
api.projects.remix({ id: process.env.GLITCH_PRJ_ID }).then(remix => {
  console.log(remix)
  console.log(remix.joinLink)
})
