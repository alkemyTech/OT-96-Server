const newsRepository = require('../repositories/news');

const getAll = async () => {
  const news = await newsRepository.getAll();
  return news;
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

const getCommentsByNewsId = async (id) => {
  const novelty = await newsRepository.getCommentsByNewsId(id);
  return novelty.Comments;
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
  getCommentsByNewsId,
  create,
  update,
  remove
};
