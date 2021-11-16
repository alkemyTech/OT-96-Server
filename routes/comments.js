const express = require('express');
const commentsRouter = express.Router();
const authMiddleware = require('../middlewares/auths');
const commentsController = require('../controllers/comments');

commentsRouter.get('/', authMiddleware.isAdmin, commentsController.getAll);

module.exports = commentsRouter;
