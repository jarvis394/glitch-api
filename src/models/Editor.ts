import WebSocket from 'ws'
import Project from '../structures/Project'
import { WEBSOCKET_BASE_URL } from '../utils/constants'
import Glitch, { IGlitchOptions } from './Glitch'

/**
 * Glitch application's editor class
 *
 * Connects to the project via WebSockets and provides full API of that project.
 * Firstly, you would need to invoke `Editor.connect()` function
 * in order to connect to the scokets.
 *
 * Then you would able to use any method avaliable on the
 * Glitch's editor page in the `application` variable
 * @class
 */
export default class Editor {
  /**
   * Project which editor would try to connect to
   */
  public project: Project

  /**
   * Glitch token that retrieves from the glitch instance
   */
  public token: string

  /**
   * Socket connection
   */
  public socket: WebSocket

  /**
   * Error handler function
   */
  public errorHandler: any

  /**
   * Close handler function
   */
  public closeHandler: any

  /**
   * Message handler function
   */
  public messageHandler: any

  constructor(project: Project, token: string) {
    if (!project)
      throw new Error(
        'No project was provided when tried to create new Editor instance'
      )
    if (!token)
      throw new Error(
        'No token was provided when tried to create new Editor instance'
      )

    this.project = project
    this.token = token
    this.socket = new WebSocket(
      `${WEBSOCKET_BASE_URL}/${this.project.id}/ot?authorization=${this.token}`
    )

    this.errorHandler = (e: WebSocket.ErrorEvent) => {
      throw e.error
    }
    this.closeHandler = (event: WebSocket.CloseEvent) => event
    this.messageHandler = (message: WebSocket.MessageEvent) => message
  }

  /**
   * Connects to the Glitch's project via WebSockets
   *
   * Used `ws` library for connection
   */
  connect(): WebSocket {
    const open = () =>
      this.socket.send(
        JSON.stringify({
          type: 'master-state',
          clientId: this.generateClientId(),
          force: true,
        })
      )

    this.socket.onopen = open
    this.socket.onerror = this.errorHandler.bind(this)
    this.socket.onclose = this.closeHandler.bind(this)
    this.socket.onmessage = this.messageHandler.bind(this)

    return this.socket
  }

  /**
   * Generates a 10 symbols random string which is used as client ID
   */
  generateClientId(): string {
    return [...Array(10)]
      .map(_ => (~~(Math.random() * 36)).toString(36))
      .join('')
  }

  /**
   * Sets handler for websocket error event
   * @param f - Handler function
   */
  setErrorHandler(f: any): this {
    this.errorHandler = f
    this.socket.onerror = this.errorHandler.bind(this)
    return this
  }

  /**
   * Sets handler for websocket close event
   * @param f - Handler function
   */
  setCloseHandler(f: any): this {
    this.closeHandler = f
    this.socket.onclose = this.closeHandler.bind(this)
    return this
  }

  /**
   * Sets handler for websocket message event
   * @param f - Handler function
   */
  setMessageHandler(f: any): this {
    this.messageHandler = f
    this.socket.onmessage = this.messageHandler.bind(this)
    return this
  }
}
