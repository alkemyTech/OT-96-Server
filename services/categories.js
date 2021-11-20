const categoriesRepository = require('../repositories/categories');
const newsRepository = require('../repositories/news');
const paginateRequest = require('../services/paginateRequest');
const limit = 10;

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

const getAllNames = async (req) => {
  const maxCount = await categoriesRepository.getCount();
  const paginationData = paginateRequest.pagination(
    limit,
    maxCount,
    req,
    'categories'
  );
  const categories = await categoriesRepository.getAllNames(
    limit,
    paginationData.offset
  );

  // respuesta por defecto (pagina intermedia)
  let response = {
    maxCount: paginationData.maxCount,
    previousPage: paginationData.previousPageUrl,
    nextPage: paginationData.nextPageUrl,
    data: categories
  };

  // respuestas pagina 1
  if (page == 1) {
    response.previousPage = null;
  }

  if (page == paginationData.lastPage) {
    //devuelve solo data
    response.nextPage = null;
  }

  return response;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getAllNames
};
