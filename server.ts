import { WebSocketServer } from 'ws';

// Optional: Colored console output for readability
import chalk from 'chalk'; // run `npm install chalk` if you want this

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', (ws) => {
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
    } catch (err) {
      console.error(chalk.red('❌ Failed to parse message:'), message.toString());
    }
  });

  ws.on('close', () => {
    console.log(chalk.magenta('👋 Client disconnected'));
  });
});

console.log(chalk.blue('🌐 WebSocket server running at ws://localhost:3000'));
