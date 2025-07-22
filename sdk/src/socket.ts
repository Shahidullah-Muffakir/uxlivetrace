export function openSocket(url: string): WebSocket {
    const socket = new WebSocket(url)
    socket.onopen = () => console.log("Inspector connected")
    socket.onerror = (err) => console.error("Inspector error", err)
    return socket
  }
  