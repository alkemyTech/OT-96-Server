const categoriesRepository = require('../repositories/categories');

const getAll = async () => {
  const categories = await categoriesRepository.getAll();
  if (categories.length == 0) {
    const error = new Error('No hay categorías!');
    error.status = 404;
    throw error;
  }

  return categories;
};

const getById = async (id) => {
  const category = await categoriesRepository.getById(id);
  
  if (!category) {
    const error = new Error('No existe la categoria!');
    error.status = 404;
    throw error;
  }

  return category;
};

const create = async ({ name, image, description }) => {
  const category = await categoriesRepository.getByName(name);
  if (category) {
    const error = new Error('categoria repetida');
    error.status = 409;
    throw error;
  }

  return await categoriesRepository.create({ name, image, description });
};

const update = async (id, { name, image, description }) => {
  const category = await categoriesRepository.update(id, {
    name,
    image,
    description
  });
  if (!category) {
    const error = new Error('categoria no encontrada.');
    error.status = 409;
    throw error;
  }
  return category;
};
const remove = async (id) => {
  const category = await categoriesRepository.getById(id);
  if (!category) {
    const error = new Error(`No existe la categoria con ID: ${id}!`);
    error.status = 404;
    throw error;
  }
  await categoriesRepository.remove(id);
};

const getAllNames = async () => {
  const category = await categoriesRepository.getAllNames();
  if (category.length == 0) {
    const error = new Error('No existen categorías.');
    error.status = 404;
    throw error;
  }
  return category;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getAllNames
};
