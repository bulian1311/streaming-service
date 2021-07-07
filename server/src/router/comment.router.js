import mongoose from 'mongoose';
import { body } from 'express-validator';

import commentController from '../controllers/comment.controller.js';

const commentRouter = (router) => {
  router.get('/comment', commentController.getAll);

  router.post(
    '/comment',
    body('username').isString(),
    body('id').customSanitizer((value) => {
      return mongoose.Types.ObjectId(value);
    }),
    commentController.create,
  );
};

export default commentRouter;
