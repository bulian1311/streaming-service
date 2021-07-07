import { body, param } from 'express-validator';
import mongoose from 'mongoose';

import trackController from '../controllers/track.controller.js';

const trackRouter = (router, upload) => {
  router.get('/track', trackController.getAll);

  router.get(
    '/track/:id',
    param('id').customSanitizer((value) => {
      return mongoose.Types.ObjectId(value);
    }),
    trackController.getOne,
  );

  router.post(
    '/track',
    upload.fields([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
    body('name').isString(),
    body('artist').isString(),
    body('text').isString(),
    trackController.create,
  );

  router.get('/search', trackController.search);

  router.delete('/track/:id', trackController.delete);
};

export default trackRouter;
