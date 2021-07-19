import dotenv from 'dotenv';
import { createServer } from "http";
import { connectMongo } from './mongoose.js';

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import router from './router/index.js';
import errorMiddleware from './middlewares/error.middleware.js';

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  }),
);

app.use('/uploads', express.static('uploads'));

app.use('/api', router);

app.use(errorMiddleware);



const server = createServer(app);

const start = async () => {
  const { PORT = 4000 } = process.env;
  try {
    await connectMongo();
    server.listen(PORT, () => console.log(`App listening on ${PORT}!`));
    //node_media_server.run();
  } catch (err) {
    console.error(err.message);
  }
};

start();

//Sockets
import { Server as SocketServer } from "socket.io";

const io = new SocketServer(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true
  }
});

io.on('connection', (socket) => {
  console.log("New connection qqqqqqqqq");

  socket.on("disconect", () => {
    console.log("User has left.");
  })
});
