// socket.js
import { io } from "socket.io-client";

const baseUrl = "http://localhost:8080";

class Socket {
  constructor() {
    if (!Socket.instance) {
      this.socket = io(baseUrl);
      Socket.instance = this;
    }
    return Socket.instance;
  }

  getSocket() {
    return this.socket;
  }
}

const socketInstance = new Socket();
Object.freeze(socketInstance);

export default socketInstance;
