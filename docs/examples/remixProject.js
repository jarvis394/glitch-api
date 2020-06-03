const { Glitch } = require('../../src')
const glitch = new Glitch({ token: process.env.TOKEN })
const { api } = glitch

// hello-express
const ID = 'a0fcd798-9ddf-42e5-8205-17158d4bf5bb'

// Remix project
api.projects.remix(ID).then(remix => {
  console.log(remix)
})
