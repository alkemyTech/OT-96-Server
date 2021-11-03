const { Router } = require('express');
const newsRouter = Router();
const newsController = require('../controllers/news');
const authsMiddlewares = require('../middlewares/auths');
const { newsDataValidation } = require('../middlewares/newsDataValidation');

newsRouter.delete('/:id',[authsMiddlewares.isAdmin], newsController.remove);
newsRouter.put('/', newsDataValidation, newsController.create);

module.exports = newsRouter;
