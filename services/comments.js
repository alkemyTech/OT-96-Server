const commentsRepository = require('../repositories/comments');

const getAll = async () => {
  const response = await commentsRepository.getAll();
  return response;
};

const update = async (id, { body }) => {
  const comments = await commentsRepository.getById(id);
  console.log(comments);
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
  update
};
