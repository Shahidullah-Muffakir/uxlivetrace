import { WebSocketServer,WebSocket } from 'ws';
import chalk from 'chalk';

const wss = new WebSocketServer({ port: 3000 });
const clients: Set<WebSocket> = new Set();

wss.on('connection', (ws:WebSocket) => {
  clients.add(ws);
  console.log(chalk.green('✅ Client connected'));

  ws.on('message', (message) => {
    try {
      const parsed = JSON.parse(message.toString());
      console.log(chalk.cyan('📦 Received event batch:'));

      if (Array.isArray(parsed)) {
        parsed.forEach((event, idx) => {
          console.log(chalk.yellow(`  ${idx + 1}. ${event.type}`));
          console.log('     ', chalk.gray(`timestamp:`), new Date(event.timestamp).toISOString());
          console.log('     ', chalk.gray(`payload:`), event.payload);
        });
      } else {
        console.log('  (non-array event)', parsed);
      }

      // 🔄 Broadcast to all clients (e.g., the dashboard)
      for (const client of clients) {
        if (client !== ws && client.readyState === ws.OPEN) {
          console.log(chalk.magenta('📡 Broadcasting event to client',client));
          client.send(JSON.stringify(parsed)); // Send raw or wrap in array
        }
      }

    } catch (err) {
      console.error(chalk.red('❌ Failed to parse message:'), message.toString());
    }
  });

  ws.on('close', () => {
    clients.delete(ws);
    console.log(chalk.magenta('👋 Client disconnected'));
  });
});

console.log(chalk.blue('🌐 WebSocket server running at ws://localhost:3000'));
