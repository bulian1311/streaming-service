import express from 'express';
import { body, param } from 'express-validator';
import mongoose from 'mongoose';
import multer from 'multer';

import trackController from '../controllers/track.controller.js';

const upload = multer({ dest: 'uploads/' });
const trackRouter = express.Router();

trackRouter.get('/', trackController.getAll);

trackRouter.get(
  '/:id',
  param('id').customSanitizer((value) => {
    return mongoose.Types.ObjectId(value);
  }),
  trackController.getOne,
);

trackRouter.post(
  '/',
  upload.fields([
    { name: 'picture', maxCount: 1 },
    { name: 'audio', maxCount: 1 },
  ]),
  body('name').isString(),
  body('artist').isString(),
  body('text').isString(),
  trackController.create,
);

trackRouter.get('/search', trackController.search);

trackRouter.delete('/:id', trackController.delete);

export default trackRouter;
