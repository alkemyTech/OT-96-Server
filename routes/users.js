const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/users');
const authMiddleware = require('../middlewares/auths');
const usersMiddleware = require('../middlewares/users');

usersRouter.get('/', authMiddleware.isAdmin, usersController.getAll);

usersRouter.put('/:id', usersMiddleware.validateUser, usersController.update);

module.exports = usersRouter;
