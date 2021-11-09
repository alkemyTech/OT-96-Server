const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/users');
const authMiddleware = require('../middlewares/auths');
const usersValidation = require('../middlewares/userValidation');

usersRouter.get('/', authMiddleware.isAdmin, usersController.getAll);

usersRouter.put('/:id', usersValidation, usersController.update);

module.exports = usersRouter;
