import express from 'express';

import userRouter from './user.router.js';
import trackRouter from './track.router.js';
import streamRouter from './stream.router.js';

const router = new express.Router();

userRouter(router);
trackRouter(router);
streamRouter(router);

export default router;
