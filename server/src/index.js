require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// const session = require('express-session');

const errorMiddleware = require('./middlewares/error.midleware');
const router = require('./router');

const { PORT = 4000 } = process.env;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}));
// app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }));
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => console.log(`App listening on ${PORT}!`));
  } catch (err) {
    console.error(err.message);
  }
};

start();
