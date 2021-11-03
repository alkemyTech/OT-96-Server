const categoriesService = require('../services/categories');

const update = async (req, res, next) => {
  try {
    const response = await categoriesService.update(req.params.id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { update };
