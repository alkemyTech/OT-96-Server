const { Router } = require('express');
const newsRouter = Router();
const newsController = require('../controllers/news');
const authsMiddlewares = require('../middlewares/auths');

newsRouter.get('/:id',[authsMiddlewares.isAdmin], newsController.getById);

module.exports = newsRouter;