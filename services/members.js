/* const membersRepository = require('./repositories/members');
const getAll = async () => {
  const member = await membersRepository.getById(id);
  if (!member) {
    const error = new Error('El miembro no existe');
    error.status = 409;
    throw error;
  }
  return member;
};

module.exports = {
  getAll
};
 */