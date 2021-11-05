const { Router } = require('express');
const newsRouter = Router();
const newsController = require('../controllers/news');
const newsDataValidation = require('../middlewares/newsDataValidation');
const { isAdmin } = require('../middlewares/auths');

newsRouter.put('/:id', isAdmin, newsController.update);
newsRouter.post('/', isAdmin, newsDataValidation, newsController.create);
newsRouter.delete('/:id', [isAdmin], newsController.remove);

module.exports = newsRouter;
