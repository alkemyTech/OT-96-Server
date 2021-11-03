const { Router } = require("express");
const newsRouter = Router();
const newsController = require("../controllers/news");
const { newsDataValidation } = require("../middlewares/newsDataValidation");

newsRouter.put("/:id", newsController.update);
newsRouter.put("/", newsDataValidation, newsController.create);

module.exports = newsRouter;
