const categoriesService = require('../services/categories');

const update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await categoriesService.update(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { update };
