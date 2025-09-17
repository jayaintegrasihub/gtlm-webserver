export class LoadWebSocket {
  constructor(url) {
    this.socket = new WebSocket(url) 
    this.socket.onmessage = (event) => {
      this.handleMessage(event.data)
    } 

    this.socket.onerror = (event) => {
      this.handleError(event)
    }

    this.socket.onopen = (event) => {
      this.handleOpen(event)
    }

    this.socket.onclose = (event) => {
      this.handleClose(event)
    }

  }
  
    handleMessage(message) {
      console.log(message)
      return message
    }
  
    handleError(event) {
      console.error('WebSocket Error:', event)
    }
  
    handleOpen(event) {
      console.log('WebSocket Connection Opened:', event)
    }
  
    handleClose(event) {
      console.log('WebSocket Connection Closed:', event)
    }

    sendMessage(message) {
      this.socket.send(message);
    }
  }
  
