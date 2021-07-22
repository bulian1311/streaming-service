import express from 'express';
const router = express.Router();

import trackRouter from './track.router.js';
import streamRouter from './stream.router.js';
import commentRouter from './comment.router.js';

router.use('/track', trackRouter);
router.use('/stream', streamRouter);
router.use('/comment', commentRouter);

export default router;
