import { Glitch } from '../src'

const TOKEN = 'token'
const glitch = new Glitch({ token: TOKEN })

describe('Get teams', () => {
  it('should return token', async () => {
    expect(glitch.token).toBe(TOKEN)
  })
})
