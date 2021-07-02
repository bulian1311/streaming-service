import authMidleware from '../middlewares/auth.middleware.js';
import streamController from '../controllers/stream.controller.js';

const streamRouter = (router) => {
  router.get('/stream/info', authMidleware, streamController.getStreams);

  router.get('/stream/key', authMidleware, streamController.getStreamKey);
  router.post('/stream/key', authMidleware, streamController.updateStreamKey);
};

export default streamRouter;
