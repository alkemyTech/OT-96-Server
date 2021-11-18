const categoriesRepository = require('../repositories/categories');
const newsRepository = require('../repositories/news');

const getAll = async () => {
  const categories = await categoriesRepository.getAll();
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
  const category = await categoriesRepository.getById(id);
  console.log(category);
  if (!category) {
    const error = new Error('categoria no encontrada.');
    error.status = 409;
    throw error;
  }
  const data = {
    name,
    image,
    description
  };
  await categoriesRepository.update(id, data);

  return category;
};
const remove = async (id) => {
  const category = await categoriesRepository.getById(id);
  if (!category) {
    const error = new Error(`No existe la categoria con ID: ${id}!`);
    error.status = 404;
    throw error;
  }
  const news = await newsRepository.getByCategoryId(id);
  if (news.length > 0) {
    const error = new Error(`No puede borrarse ya que tiene news asociadas`);
    error.status = 401;
    throw error;
  }
  await categoriesRepository.remove(id);
};

const getAllNames = async (page) => {
  let pageNumber = 0;
  const size = 10;

  if(!Number.isNaN(page) && page > 0) {
    pageNumber = page
  }
  const category = await categoriesRepository.getAllNames(pageNumber, size);
  console.log(category)

  if(category.length === 0) {
    return await categoriesRepository.getAllNames(0, size);
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
