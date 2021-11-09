const express = require('express');
const authRouter = express.Router();
const authenticationsController = require('../controllers/authentications');
const usersController = require('../controllers/users.js');
const usersMiddleware = require('../middlewares/users');
const authMiddleware = require('../middlewares/auths');

authRouter.post(
  '/login',
  usersMiddleware.validateLogin,
  authenticationsController.login
);

authRouter.post(
  '/register',
  usersMiddleware.validateUser,
  usersController.create
);

authRouter.get(
  '/me',
  authMiddleware.isLoggedUser,
  authenticationsController.myData
);

module.exports = authRouter;
