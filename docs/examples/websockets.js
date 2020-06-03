const { Glitch } = require('../../src')
const glitch = new Glitch({ token: process.env.TOKEN })
const { api } = glitch
const DOMAIN = 'hello-express'

;(async () => {
  const editor = await api.projects.edit({ domain: DOMAIN })
  
  editor.setMessageHandler((message) => console.log(JSON.parse(message.data)))
  editor.connect()
})()
