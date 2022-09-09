const express = require('express');
const app = express();
const PORT = 4000;
const http = require('http').createServer(app);
const cors = require('cors');
const socketIO = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

app.use(cors());

app.get('/api', (req: any, res: any) => {
  res.json({
    message: 'Hello world',
  });
});

socketIO.on('connection', (socket: any) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('message', (data: any) => {
    socketIO.emit('messageResponse', data);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
