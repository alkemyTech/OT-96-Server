const { Router } = require('express');
const newsRouter = Router();
const newsController = require('../controllers/news');
const authMiddleware = require('../middlewares/auths');
const newsDataValidation = require('../middlewares/newsDataValidation');

newsRouter.get('/:id', authMiddleware.isAdmin, newsController.getById);

newsRouter.post(
  '/',
  authMiddleware.isAdmin,
  newsDataValidation,
  newsController.create
);

newsRouter.put('/:id', authMiddleware.isAdmin, newsController.update);

newsRouter.delete('/:id', authMiddleware.isAdmin, newsController.remove);

module.exports = newsRouter;
