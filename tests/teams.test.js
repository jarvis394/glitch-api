const { Glitch } = require('../src')
const glitch = new Glitch()
const { api } = glitch
const ID = 4683
const URL = 'tihon'

describe('Get teams', () => {
  it('should get team by url', async () => {
    const res = await api.teams.get({ url: URL })

    expect(res.id).toBe(ID)
  })

  it('should get team by id', async () => {
    const res = await api.teams.get({ id: ID })

    expect(res.id).toBe(ID)
  })
})

describe('Search teams', () => {
  it('should search teams by query', async () => {
    const res = await api.teams.search({ q: URL })
    
    expect(res.length).not.toBe(0)
  })
})
