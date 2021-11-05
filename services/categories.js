const categoriesRepository = require('../repositories/categories');

const getAll = async () => {
    const news = await categoriesRepository.getAll();
    return news;
}

const getById = async (id) => {
  const category = await categoriesRepository.getById(id);

  if (category) {
    return category;
  }
  const error = new Error('No existe la categoria!');
  error.status = 404;
  throw error;
};

const create = async ({ name, image, description }) => {
  const res = await categoriesRepository.getByName(name);
  if (res) {
    const error = new Error('categoria repetida');
    error.status = 409;
    throw error;
  }
  return await categoriesRepository.create({ name, image, description });
};

const update = async (id, { name, image, description }) => {
  try {
    const categoryResponse = await categoriesRepository.update(id, {
      name,
      image,
      description,
    });
    if (!categoryResponse) {
      throw new Error('Category not found');
    }
    return categoryResponse;
  } catch (error) {
    throw error;
  }
};

const remove = async (id) => {
  const category = await categoriesRepository.getById(id);
  if (!category) {
    const error = new Error(`No existe la categoria con ID: ${id}!`);
    error.status = 404;
    throw error;
  }
  return await categoriesRepository.remove(id);
};

const getAllNames = async () => {
  const news = await categoriesRepository.getAllNames();
  return news;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getAllNames,
};
