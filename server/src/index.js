import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

import router from './router/index.js';
import errorMiddleware from './middlewares/error.middleware.js';

//import node_media_server from './media_server.js';

const { PORT = 4000 } = process.env;
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
  try {
    await mongoose.connect(
      process.env.MONGO_URL,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      },
      () => console.log('Mongo connection success.'),
    );

    app.listen(PORT, () => console.log(`App listening on ${PORT}!`));

    //node_media_server.run();
  } catch (err) {
    console.error(err.message);
  }
};

start();
