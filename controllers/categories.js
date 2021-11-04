const categoriesService = require('../services/categories');

//example:
/*
const getAll = async (req, res, next) => {
    try {
        const response = await categoriesService.getAll();

        res.send(response);
    } catch (error) {
        next(error);
    }
}
*/

const remove = async (req, res, next) => {
  try {
    const category = await categoriesService.getById(req.params.id);
    if (category) {
      await categoriesService.remove(req.params.id);
      res.status(201).send('Categoría eliminada!');
    } else {
      const error = new Error(
        `No existe la categoria con ID: ${req.params.id}!`
      );
      error.status = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  remove,
};
