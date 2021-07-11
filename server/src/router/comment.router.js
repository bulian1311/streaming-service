import express from 'express';

import mongoose from 'mongoose';
import { body } from 'express-validator';

import commentController from '../controllers/comment.controller.js';

const commentRouter = express.Router();

commentRouter.get('/', commentController.getAll);

commentRouter.post(
  '/',
  body('username').isString(),
  body('id').customSanitizer((value) => {
    return mongoose.Types.ObjectId(value);
  }),
  commentController.create,
);

export default commentRouter;
