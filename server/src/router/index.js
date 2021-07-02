import express from 'express';

import userRouter from './user.router.js';
import streamRouter from './stream.router.js';

const router = new express.Router();

userRouter(router);
streamRouter(router);

export default router;
