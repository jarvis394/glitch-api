import { Glitch } from '../src'

const glitch = new Glitch()
const { api } = glitch
const ID = 'a0fcd798-9ddf-42e5-8205-17158d4bf5bb'
const DOMAIN = 'hello-express'

describe('Get projects', () => {
  it('should get project by id', async () => {
    await glitch.setAnonToken()
    const res = await api.projects.get({ id: ID })

    expect(res.id).toBe(ID)
  })

  it('should get project by domain', async () => {
    await glitch.setAnonToken()
    const res = await api.projects.get({ domain: DOMAIN })
    
    expect(res.domain).toBe(DOMAIN)
  })
})

describe('Search project', () => {
  it('should search project by query', async () => {
    await glitch.setAnonToken()
    const res = await api.projects.search(DOMAIN)

    expect(res).not.toBeNull()
  }, 60 * 1000)
})
