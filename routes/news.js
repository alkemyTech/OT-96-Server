const { Router } = require('express');
const newsRouter = Router();
const newsController = require('../controllers/news');
const authsMiddlewares = require('../middlewares/auths');

newsRouter.delete('/:id',[authsMiddlewares.isAdmin], newsController.remove);

module.exports = newsRouter;