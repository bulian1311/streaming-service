import { connectMongo } from './mongoose.js';

import express from 'express';
import cookieParser from 'cookie-parser';
//import cors from 'cors';

import router from './router/index.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.CLIENT_URL,
//   }),
// );

app.use('/auth/uploads', express.static('uploads'));

app.use(router);

app.use(errorMiddleware);

const start = async () => {
  const { PORT = 4000 } = process.env;
  try {
    await connectMongo();
    app.listen(PORT, () => console.log(`App listening on ${PORT}!`));
  } catch (err) {
    console.error(err.message);
  }
};

start();
