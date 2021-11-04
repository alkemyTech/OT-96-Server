const newsRepository = require('../repositories/news');

const getAll = async () => {};

const getById = async (id) => {
    const news = await newsRepository.getById(id);
    if (!news) {
        const error = new Error ('The request news was not found');
        error.status = 404;
        throw error;
    }
    return news;
}

const create = async (data) => {
  try {
    const newsBody = {
      name: data.name,
      content: data.content,
      image: data.image,
      categoryId: data.categoryId,
      type: 'news',
    };
    const newsCreated = await newsRepository.create(newsBody);
    return newsCreated;
  } catch (error) {
    throw error;
  }
};

const update = async (id, data) => {};

const remove = async (id) => {};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
