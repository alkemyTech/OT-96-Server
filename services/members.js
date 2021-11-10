const membersRepository = require('../repositories/members');

const getAll = async () => {
  const response = await membersRepository.getAll();
  if (response.length > 0) {
    return response;
  }
  const error = new Error('not found members!');
  error.status = 404;
  throw error;
};

module.exports = {
  getAll
};
