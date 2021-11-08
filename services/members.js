const membersRepository = require('./repositories/members');
/* const getAll = async () => {
  try {
    const member = await membersRepository.getById(id);
    if (member) {
      return member;
    }
    const error = new Error("El miembro no existe");
    error.status = 409;
    throw error;
  } catch (error) {
    next(error);
  }
}; */

module.exports = {
  // getAllMembers
};
