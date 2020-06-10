import { Glitch } from '../src'

const glitch = new Glitch()
const { api } = glitch
const ID = 4683
const _URL= 'tihon'

describe('Get teams', () => {
  it('should get team by url', async () => {
    await glitch.setAnonToken()
    const res = await api.teams.get({ url: _URL })

    expect(res.url).toBe(_URL)
  })

  it('should get team by id', async () => {
    await glitch.setAnonToken()
    const res = await api.teams.get({ id: ID })

    expect(res.id).toBe(ID)
  })

  it('should throw without param', () => {
    expect(() => api.teams.get(null)).rejects.toThrow()
    expect(() => api.teams.get({})).rejects.toThrow()
  })
})

describe('Search teams', () => {
  it('should search teams by query', async () => {
    await glitch.setAnonToken()
    const res = await api.teams.search(_URL)

    expect(res).not.toBeNull()
  })

  it('should throw without param', () => {
    expect(() => api.teams.search(null)).rejects.toThrow()
  })
})
