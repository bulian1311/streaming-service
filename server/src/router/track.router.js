import { body } from 'express-validator';

import trackController from '../controllers/track.controller.js';

const trackRouter = (router) => {
  router.get(
    '/track', 
    trackController.getAll
  );

  router.get('/track/:id', trackController.getOne);

  router.post('/track',
    body('name').isString(), 
    body('artist').isString(), 
    body('text').isString(), 
    trackController.create
  );

  router.delete('/track/:id', trackController.delete);
};

export default trackRouter;