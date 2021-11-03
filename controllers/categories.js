const categoriesService = require("../services/categories");

const create = async (req, res, next) => {
  try {
    const response = await categoriesService.create(req.body);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
