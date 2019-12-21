const { Glitch } = require('../src')
const glitch = new Glitch()
const { api } = glitch
const ID = 1424713
const LOGIN = 'jarvis'

describe('Get users', () => {
  it('should get user by id', async () => {
    const res = await api.users.get({ id: ID })

    expect(res.id).toBe(ID)
  })

  it('should get user by login', async () => {
    const res = await api.users.get({ login: LOGIN })

    expect(res.login).toBe(LOGIN)
  })
})

describe('Search users', () => {
  it('should search users by query', async () => {
    const res = await api.users.search({ q: 'jarvis' })
    
    expect(res).not.toBeNull()
  })
})
