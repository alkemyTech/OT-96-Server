const newsRepository = require('../repositories/news');

const getAll = async () => {
  try {
    const news = await newsRepository.getAll();
    if (news.length > 0) {
      return news;
    }
    const error = new Error('No existen noticias!.');
    error.status = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};

const getById = async (id) => {
  try {
    const news = await newsRepository.getById(id);
    if (news) {
      return news;
    }
    const error = new Error('La noticia no existe!.');
    error.status = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};

const create = async ({ name, content, image, categoryId }) => {
  try {
    const newsCreated = await newsRepository.create({
      name,
      content,
      image,
      categoryId,
      type: 'news'
    });
    if (newsCreated) {
      return newsCreated;
    }
    const error = new Error('La noticia no existe');
    error.status = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};

const update = async ({ name, content, image, categoryId }, id) => {
  try {
    const existNews = await newsRepository.getById(id);
    if (!existNews) {
      const data = { name, content, image, categoryId };

      const response = await newsRepository.update(data, id);

      if (response) {
        return await newsRepository.getById(id);
      } else {
        const error = new Error(
          'ninguno de los parametros que mandaste coinciden'
        );
        error.status = 409;
        throw error;
      }
    } else {
      const error = new Error('la noticia con el ' + id + ' no existe');
      error.status = 409;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};

const remove = async (id) => {
  const news = await newsRepository.getById(id);
  if (news) {
    return await newsRepository.remove(id);
  }
  const error = new Error('No se ha encontrado la noticia');
  error.status = 404;
  throw error;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
