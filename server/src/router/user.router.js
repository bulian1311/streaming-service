import { body } from 'express-validator';

import authMidleware from '../middlewares/auth.middleware.js';
import userController from '../controllers/user.controller.js';

const userRouter = (router) => {
  router.post(
    '/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 4, max: 32 }),
    userController.registration,
  );

  router.post('/login', userController.login);

  router.post('/logout', userController.logout);

  router.get('/activate/:link', userController.activate);

  router.get('/refresh', userController.refresh);

  router.get('/users', authMidleware, userController.getUsers);

  router.get('/user', authMidleware, userController.getUser);
};

export default userRouter;
