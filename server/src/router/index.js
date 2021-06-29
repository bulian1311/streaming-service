const express = require('express');
const { body } = require('express-validator');

const authMidleware = require('../middlewares/auth.middleware');
const userController = require('../controllers/user.controller');

const router = new express.Router();

router.get('/', (req, res) => {
  res.send({ msg: 'Streaming service Api' });
});

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

module.exports = router;
