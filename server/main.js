import { Server } from "socket.io";

const io = new Server(3000, { cors: { origin: '*' } });


io.on('connection', (socket) => {
  console.log('A user connected');


  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('chat_message', (msg) => {
    console.log('message: ' + msg.text);
    socket.broadcast.to(msg.room).emit('chat_message', msg.text);
  });
  socket.on('room_name', (roomName) => {
   socket.join(roomName);
  });
});

