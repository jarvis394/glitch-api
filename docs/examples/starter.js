const { Glitch } = require('../src')
const glitch = new Glitch({ token: process.env.TOKEN })
const { api } = glitch

api.users.get({ id: 1 }).then(user => {
  console.log(user) // User<Object>
})
