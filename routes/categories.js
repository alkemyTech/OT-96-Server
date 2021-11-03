const { Router } = require("express");
const categoriesRouter = Router();
const categoriesController = require("../controllers/categories");
const {
  validateCategoryDetails,
} = require("../middlewares/validateCategoryDetails");
const { isAdmin } = require("../middlewares/auths");

categoriesRouter.post(
  "/",
  isAdmin,
  validateCategoryDetails,
  categoriesController.create
);

module.exports = categoriesRouter;
