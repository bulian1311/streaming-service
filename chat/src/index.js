import { createServer } from "http";
import { Server as SocketServer } from "socket.io";
import redis from "redis";

const server = createServer();
const client = redis.createClient();

function sendMessages(socket) {
  client.lrange("messages", "0", "-1", (err, data) => {
      data.map(x => {
          const usernameMessage = x.split(":");
          const redisUsername = usernameMessage[0];
          const redisMessage = usernameMessage[1];

          socket.emit("message", {
              from: redisUsername,
              message: redisMessage
          });
      });
  });
}

const io = new SocketServer(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true
  }
});

io.on('connection', (socket) => {
  console.log("New connection");
  sendMessages(socket);

  socket.on("join", ({name, room}) => {
    console.log(name, room);
  });

  socket.on("message", ({ username, message  }) => {
    client.rpush("messages", `${from}:${message}`);

    io.emit("message", { username, message });
  });

  socket.on("disconect", () => {
    console.log("User has left.");
  })
});

const port = process.env.PORT || 4002;

server.listen(port, () => {
  console.log(`Chat listen on port:${port}`);
});

