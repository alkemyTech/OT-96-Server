const newsRepository = require('../repositories/news');

const getAll = async () => {
  return await newsRepository.getAll();
};

const getById = async (id) => {
    const news = await newsRepository.getById(id);
    if (!news) {
        const error = new Error ('The request news was not found');
        error.status = 404;
        throw error;
    }
    return news;
};

const create = async ({ name, content, image, categoryId }) => {
  try {
    const newsCreated = await newsRepository.create({
      name,
      content,
      image,
      categoryId,
      type: 'news',
    });
    return newsCreated;
  } catch (error) {
    throw error;
  }
};

const update = async ({ name, content, image, categoryId }, id) => {
  const existNews = await newsRepository.getById(id);
  if (!existNews) {
    const error = new Error('la noticia con el ' + id + ' no existe');
    error.status = 409;
    throw error;
  }
  const data = { name, content, image, categoryId };
  const [response] = await newsRepository.update(data, id);
  if (!response) {
    const error = new Error('ninguno de los parametros que mandaste coinciden');
    error.status = 409;
    throw error;
  }
  return await newsRepository.getById(id);
};

const remove = async (id) => {
  return await newsRepository.remove(id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
