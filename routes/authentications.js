const { Router } = require('express');
const authRouter = Router();
const authenticationsController = require('../controllers/authentications');
const { validateLoginDetails } = require('../middlewares/validateLoginDetails');
const usersController = require('../controllers/users.js');
const usersValidation = require('../middlewares/userValidation');
const authMiddleware = require('../middlewares/auths');

authRouter.post(
  '/login',
  validateLoginDetails,
  authenticationsController.login
);

authRouter.post('/register', usersValidation, usersController.create);

authRouter.get(
  '/me',
  authMiddleware.verifyToken,
  authenticationsController.myData
);

module.exports = authRouter;
