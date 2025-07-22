import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 3000 })

wss.on('connection', (ws) => {
  console.log('Client connected')

  ws.on('message', (message) => {
    console.log('Received event batch:', message.toString())
  })

  ws.on('close', () => {
    console.log('Client disconnected')
  })
})

console.log('WebSocket server running at ws://localhost:3000')
