import { Glitch, Editor, Project } from '../src'

const glitch = new Glitch()
const { api } = glitch
const ID = 'a0fcd798-9ddf-42e5-8205-17158d4bf5bb'
const DOMAIN = 'hello-express'
const editor = new Editor(new Project({}), 'token')

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

  it('should throw without param', () => {
    expect(() => api.projects.get(null)).rejects.toThrow()
    expect(() => api.projects.get({})).rejects.toThrow()
  })
})

describe('Search project', () => {
  it(
    'should search project by query',
    async () => {
      await glitch.setAnonToken()
      const res = await api.projects.search(DOMAIN)

      expect(res).not.toBeNull()
    },
    60 * 1000
  )

  it('should throw without param', () => {
    expect(() => api.projects.search(null)).rejects.toThrow()
  })
})

describe('Edit project', () => {
  it('should throw without param', () => {
    expect(() => api.projects.edit(null)).rejects.toThrow()
  })

  it('should throw without a project', async () => {
    expect(() => new Editor(null, null)).toThrow()
  })
  it('should throw without a token', async () => {
    expect(() => new Editor(new Project({}), null)).toThrow()
  })
  it('should return valid client ID', async () => {
    expect(Editor.generateClientId())
  })
  it('should set error handler', async () => {
    try {
      editor.setErrorHandler(() => {})
    } catch (e) {
      expect(e).toBeFalsy()
    }
  })
  it('should set close handler', async () => {
    try {
      editor.setCloseHandler(() => {})
    } catch (e) {
      expect(e).toBeFalsy()
    }
  })
  it('should set message handler', async () => {
    try {
      editor.setMessageHandler(() => {})
    } catch (e) {
      expect(e).toBeFalsy()
    }
  })
})
