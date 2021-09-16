import { createServer } from "http";
import { Server as SocketServer } from "socket.io";
import redis from "redis";

// import { connectMongo } from "./helpers/index.js";

// connectMongo();
const server = createServer();
const client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_URL);

const io = new SocketServer(server);

io.on('connection', (socket) => {
  console.log("New connection");
  //sendMessages(socket);

  socket.on("join", ({username, roomId}, callback) => {
    socket.join(roomId);

    socket.broadcast.to(roomId).emit('message', { username: 'bot', message: `${username} has joined!` });

    client.sadd(`users:${roomId}`, username);

    client.smembers(`users:${roomId}`, (err, users) => {
      console.log(users);
      io.to(roomId).emit('roomData', { users });
    });

    callback();
  });

  socket.on("message", ({ username, message, roomId  }) => {
    //client.rpush(`messages:${roomId}`, `${username}:${message}`);

    io.to(roomId).emit('message', { username, message });
  });

  socket.on("disconect", ({username, roomId}) => {
    const message = `${username} has left.`;
    io.to(roomId).emit('message', { username: 'bot', message });

    client.srem(`users:${roomId}`, username);
    const users = client.smembers(`users:${roomId}`);
    io.to(roomId).emit('roomData', { users });
  })
});

const port = process.env.PORT || 4002;

server.listen(port, () => {
  console.log(`Chat listen on port:${port}`);
});

