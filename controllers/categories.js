const categoriesService = require('../services/categories');

const create = async (req, res, next) => {
  try {
    const response = await categoriesService.create(req.body);
    return res.status(200).json(response);
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
      Category: response,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, update };
