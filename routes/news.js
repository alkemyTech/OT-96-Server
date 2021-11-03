const { Router } = require("express");
const newsRouter = Router();
const newsController = require("../controllers/news");

newsRouter.put("/:id", newsController.update);

module.exports = newsRouter;
