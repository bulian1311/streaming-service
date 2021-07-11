import express from 'express';

import authMidleware from '../middlewares/auth.middleware.js';
import streamController from '../controllers/stream.controller.js';

const streamRouter = express.Router();

streamRouter.get('/info', authMidleware, streamController.getStreams);

streamRouter.get('/key', authMidleware, streamController.getStreamKey);
streamRouter.post('/key', authMidleware, streamController.updateStreamKey);

export default streamRouter;
