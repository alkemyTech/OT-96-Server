const commentsRepository = require('../repositories/comments');

const getAll = async () => {
  const response = await commentsRepository.getAll();
  return response;
};

module.exports = {
  getAll
};
