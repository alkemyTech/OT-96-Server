const { Router } = require('express');
const authRouter = Router();
const authenticationsController = require('../controllers/authentications');
const { validateLoginDetails } = require('../middlewares/validateLoginDetails');
const usersController = require('../controllers/users.js');
const usersValidation = require('../middlewares/userValidation');

authRouter.post(
  '/login',
  validateLoginDetails,
  authenticationsController.login
);
authRouter.post('/register', usersValidation, usersController.create);

module.exports = authRouter;
