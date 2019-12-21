const { Glitch } = require('../../src')
const glitch = new Glitch({ token: process.env.TOKEN })
const { api } = glitch

;(async () => {
  const editor = await api.projects.edit({ domain: 'tihon' })
  
  editor.setMessageHandler((message) => console.log(JSON.parse(message.data)))
  editor.connect()
})()
