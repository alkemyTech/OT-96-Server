const express = require('express');
const newsRouter = express.Router();
const newsController = require('../controllers/news');
const authMiddleware = require('../middlewares/auths');
const newsMiddleware = require('../middlewares/news');
const pagination = require('../middlewares/pagination');

newsRouter.get(
  '/',
  authMiddleware.isAdmin,
  pagination.validate,
  newsController.getAll
);

newsRouter.get('/:id', authMiddleware.isAdmin, newsController.getById);

newsRouter.post(
  '/',
  authMiddleware.isAdmin,
  newsMiddleware.validateNew,
  newsController.create
);

newsRouter.put('/:id', authMiddleware.isAdmin, newsController.update);

newsRouter.delete('/:id', authMiddleware.isAdmin, newsController.remove);

module.exports = newsRouter;
