import express from 'express';
import multer from 'multer';

import userRouter from './user.router.js';
import trackRouter from './track.router.js';
import streamRouter from './stream.router.js';
import commentRouter from './comment.router.js';

const router = new express.Router();
const upload = multer({ dest: 'uploads/' });

userRouter(router);
trackRouter(router, upload);
streamRouter(router);
commentRouter(router);

export default router;
