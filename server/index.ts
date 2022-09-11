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

type User = {
  userName: string;
  id: string;
  socketID: string;
  avatar: any;
};

type Message = {
  text: string;
  name: string;
  id: string;
  socketID: string;
  time: string;
};

let users: User[] = [];

app.use(cors());

app.get('/api', (req: any, res: any) => {
  res.json({
    message: 'Hello world',
  });
});

socketIO.on('connection', (socket: any) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('message', (data: Message) => {
    socketIO.emit('messageResponse', data);
  });

  socket.on('newUser', (data: User) => {
    users.push(data);
    socketIO.emit('newUserResponse', users);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    users = users.filter((user) => user.socketID !== socket.id);
    socketIO.emit('newUserResponse', users);
    socket.disconnect();
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
