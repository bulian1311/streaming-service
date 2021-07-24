import express from 'express';
import { body } from 'express-validator';

import authMidleware from '../middlewares/auth.middleware.js';
import userController from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post(
  '/registration',
  body('username').isLength({ min: 4, max: 32 }),
  body('email').isEmail(),
  body('password').isLength({ min: 4, max: 32 }),
  userController.registration,
);

userRouter.post('/login', userController.login);

userRouter.post('/logout', userController.logout);

userRouter.get('/activate/:link', userController.activate);

userRouter.get('/refresh', userController.refresh);

userRouter.get('/users', authMidleware, userController.getUsers);

userRouter.get('/user', authMidleware, userController.getUser);

export default userRouter;
