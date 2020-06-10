import WebSocket from 'ws'
import Project from '../structures/Project'
import { WEBSOCKET_BASE_URL } from '../utils/constants'

/**
 * Glitch project's terminal class
 *
 * Connects to the project's terminal via WebSockets.
 * @class
 */
export default class Terminal {
  /**
   * Project which terminal would try to connect to
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
        'No project was provided when tried to create new Terminal instance'
      )
    if (!token)
      throw new Error(
        'No token was provided when tried to create new Terminal instance'
      )

    this.project = project
    this.token = token
    this.socket = new WebSocket(
      `${WEBSOCKET_BASE_URL}/${this.project.domain}/console?authorization=${this.token}`
    )

    this.errorHandler = (e: WebSocket.ErrorEvent) => {
      throw e.error
    }
    this.closeHandler = (event: WebSocket.CloseEvent) => event
    this.messageHandler = (message: WebSocket.MessageEvent) => message
  }

  /**
   * Connects to the Glitch project's terminal via WebSockets
   *
   * Uses `ws` library for connection
   */
  connect(): WebSocket {
    this.socket.onerror = this.errorHandler.bind(this)
    this.socket.onclose = this.closeHandler.bind(this)
    this.socket.onmessage = this.messageHandler.bind(this)
    
    return this.socket
  }

  /**
   * Sets handler for websocket error event
   * @param f - Handler function
   */
  setErrorHandler(f: (event: WebSocket.ErrorEvent) => any): this {
    this.errorHandler = f
    this.socket.onerror = this.errorHandler.bind(this)
    return this
  }

  /**
   * Sets handler for websocket close event
   * @param f - Handler function
   */
  setCloseHandler(f: (event: WebSocket.CloseEvent) => any): this {
    this.closeHandler = f
    this.socket.onclose = this.closeHandler.bind(this)
    return this
  }

  /**
   * Sets handler for websocket message event
   * @param f - Handler function
   */
  setMessageHandler(f: (event: WebSocket.MessageEvent) => any): this {
    this.messageHandler = f
    this.socket.onmessage = this.messageHandler.bind(this)
    return this
  }
}
