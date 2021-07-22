import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { connectMongo } from './src/mongoose.js';
import router from './router/index.js';
import errorMiddleware from './middlewares/error.middleware.js';

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

app.use('/api', router);

app.use(errorMiddleware);

const start = async () => {
  const { PORT = 6000 } = process.env;
  try {
    await connectMongo();
    app.listen(PORT, () => console.log(`App listening on ${PORT}!`));
  } catch (err) {
    console.error(err.message);
  }
};

start();