const categoriesService = require('../services/categories');

const getAll = async (req, res, next) => {
  try {
    const categories = await categoriesService.getAll();
    res.status(200).json(categories);
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

const create = async (req, res, next) => {
  try {
    const response = await categoriesService.create(req.body);
    return res.status(200).json({
      success: true,
      msg: `Category ${req.body.name} is created succesfully`,
      Category: response
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const response = await categoriesService.update(req.params.id, req.body);
    res.status(200).json({
      success: true,
      msg: `Category ${req.params.id} is updated succesfully`,
      Category: response
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const response = await categoriesService.remove(req.params.id);
    res.status(200).json({
      success: true,
      msg: `Category ${req.params.id} removed succesfully`,
      Category: response
    });
  } catch (error) {
    next(error);
  }
};

const getAllNames = async (req, res, next) => {
  try {
    const categories = await categoriesService.getAllNames();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  update,
  create,
  remove,
  getAllNames
};
