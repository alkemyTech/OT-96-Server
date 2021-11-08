const categoriesRepository = require('../repositories/categories');

const getAll = async () => {
  try {
    const categories = await categoriesRepository.getAll();
    if (categories.length > 0) {
      return categories;
    }
    const error = new Error('No hay categorías!');
    error.status = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};

const getById = async (id) => {
  try {
    const category = await categoriesRepository.getById(id);

    if (category) {
      return category;
    }
    const error = new Error('No existe la categoria!');
    error.status = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};

const create = async ({ name, image, description }) => {
  try {
    const category = await categoriesRepository.getByName(name);
    if (!category) {
      return await categoriesRepository.create({ name, image, description });
    }
    const error = new Error('categoria repetida');
    error.status = 409;
    throw error;
  } catch (error) {
    next(error);
  }
};

const update = async (id, { name, image, description }) => {
  try {
    const category = await categoriesRepository.update(id, {
      name,
      image,
      description
    });
    if (!category) {
      return category;
    }
    const error = new Error('categoria no encontrada.');
    error.status = 409;
    throw error;
  } catch (error) {
    next(error);
  }
};
const remove = async (id) => {
  try {
    const category = await categoriesRepository.getById(id);
    if (category) {
      return await categoriesRepository.remove(id);
    }
    const error = new Error(`No existe la categoria con ID: ${id}!`);
    error.status = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};

const getAllNames = async () => {
  try {
    const category = await categoriesRepository.getAllNames();
    if (category.length > 0) {
      return category;
    }
    const error = new Error('No existen categorías.');
    error.status = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getAllNames
};
