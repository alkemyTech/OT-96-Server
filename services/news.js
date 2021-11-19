const newsRepository = require('../repositories/news');
const limit = 10;

const getAll = async (req, page) => {
  const offset = (page - 1) * limit;
  const news = await newsRepository.getAll(limit, offset);
  let nextPage = page + 1;
  let previousPage = page - 1;
  if (!news) {
    const error = new Error('There are no News!');
    error.status = 404;
    throw error;
  }
  if (previousPage == 0) {
    const response = {
      data: news,
      nextPage: `${req.protocol}://${req.get('host')}/news?page=${nextPage}`
    };
    return response;
  }
  const response = {
    data: news,
    previousPage: `${req.protocol}://${req.get(
      'host'
    )}/news?page=${previousPage}`,
    nextPage: `${req.protocol}://${req.get('host')}/news?page=${nextPage}`
  };
  return response;
};

const getById = async (id) => {
  const news = await newsRepository.getById(id);
  if (!news) {
    const error = new Error('La noticia no existe!.');
    error.status = 404;
    throw error;
  }
  return news;
};

const create = async ({ name, content, image, categoryId }) => {
  const newsCreated = await newsRepository.create({
    name,
    content,
    image,
    categoryId,
    type: 'news'
  });
  if (!newsCreated) {
    const error = new Error('La noticia no existe');
    error.status = 404;
    throw error;
  }
  return newsCreated;
};

const update = async ({ name, content, image, categoryId }, id) => {
  const existNews = await newsRepository.getById(id);
  if (!existNews) {
    const error = new Error('la noticia con el ' + id + ' no existe');
    error.status = 409;
    throw error;
  }
  const data = { name, content, image, categoryId };

  const response = await newsRepository.update(data, id);

  if (!response) {
    const error = new Error('ninguno de los parametros que mandaste coinciden');
    error.status = 409;
    throw error;
  }
  return await newsRepository.getById(id);
};

const remove = async (id) => {
  const news = await newsRepository.getById(id);
  if (!news) {
    const error = new Error('No se ha encontrado la noticia');
    error.status = 404;
    throw error;
  }
  return await newsRepository.remove(id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
