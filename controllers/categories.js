const categoriesService = require("../services/categories");

const getAll = async (req, res, next) => {
  try {
    const response = await categoriesService.getAll();

    res.send(response);
  } catch (error) {
    next(error);
  }
};
const getById = async (req, res, next) => {
  try {
    const category = await categoriesService.getById(req.params.id);

    res.status(200).send({ status: 200, data: category });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
};
