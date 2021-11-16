const express = require('express');
const commentsRouter = express.Router();
const authMiddleware = require('../middlewares/auths');
const commentsMiddlewares = require('../middlewares/comments');
const commentsController = require('../controllers/comments');

commentsRouter.get('/', authMiddleware.isAdmin, commentsController.getAll);
commentsRouter.post(
  '/',
  commentsMiddlewares.validateComments,
  commentsController.create
);

module.exports = commentsRouter;
