import { Glitch } from '../src'

const glitch = new Glitch()
const { api } = glitch
const ID = 1424713
const LOGIN = 'jarvis394'

describe('Get users', () => {
  it('should get user by id', async () => {
    await glitch.setAnonToken()
    const res = await api.users.get({ id: ID })

    expect(res.id).toBe(ID)
  })

  it('should get user by login', async () => {
    await glitch.setAnonToken()
    const res = await api.users.get({ login: LOGIN })

    expect(res.login).toBe(LOGIN)
  })
})

describe('Search users', () => {
  it('should search users by query', async () => {
    await glitch.setAnonToken()
    const res = await api.users.search(LOGIN)
    
    expect(res).not.toBeNull()
  })
})
