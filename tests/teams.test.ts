const { Glitch } = require('../src')
const glitch = new Glitch()
const { api } = glitch
const ID = 4683
const _URL= 'tihon'

describe('Get teams', () => {
  it('should get team by url', async () => {
    const res = await api.teams.get({ url: _URL })

    expect(res.url).toBe(_URL)
  })

  it('should get team by id', async () => {
    const res = await api.teams.get({ id: ID })

    expect(res.id).toBe(ID)
  })
})

describe('Search teams', () => {
  it('should search teams by query', async () => {
    const res = await api.teams.search({ q: _URL })

    expect(res).not.toBeNull()
  })
})
