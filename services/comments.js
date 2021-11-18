const commentsRepository = require('../repositories/comments');

const create = async ({ userId, newsId, body }) => {
  const response = await commentsRepository.create({
    userId,
    newsId,
    body
  });

  if (!response) {
    const error = new Error('there was an error in comment creation');
    error.status = 403;
    throw error;
  }
  return response;
};
const getAll = async () => {
  const response = await commentsRepository.getAll();
  return response;
};

const update = async (id, { body }) => {
  const comments = await commentsRepository.getById(id);
  if (!comments) {
    const error = new Error('comments no encontrado.');
    error.status = 409;
    throw error;
  }
  await commentsRepository.update({ body }, id);

  return await commentsRepository.getById(id);
};

module.exports = {
  getAll,
  update,
  create
};
