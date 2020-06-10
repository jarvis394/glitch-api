import { Glitch, Request } from '../src'

const glitch = new Glitch({ debug: true })
const { api } = glitch
const ID = 1424713

describe('Get teams', () => {
  it('should log debug info', async () => {
    let consoleOutput: string[] = []
    console.debug = (s: string) => consoleOutput.push(s)
    await api.users.get({ id: ID })
    expect(
      consoleOutput.some(e => e.startsWith('GLAPI: Fetching'))
    ).toBeTruthy()
    expect(consoleOutput.some(e => e.startsWith('GLAPI: Fetched'))).toBeTruthy()
  })

  it('should throw on fetch error', async () => {
    try {
      await api.callMethod(new Request('METHOD_THAT_IS_NOT_DEFINED', {}, {}))
    } catch (e) {
      expect(e).toBeTruthy()
    }
  })
})
