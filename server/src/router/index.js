const express = require('express');

const userRouter = require('./user.router');

const router = new express.Router();

userRouter(router);

module.exports = router;