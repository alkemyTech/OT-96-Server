const membersRepository = require('./repositories/members');

const remove = async (id) => {
	const user = await membersRepository.getById(id);
	if (user) {
		const error = new Error('El Miembro no existe!.');
		error.status = 404;
		throw error;
	}
	await membersRepository.remove(id);
};

/*
const getAll = async () => {
  const member = await membersRepository.getById(id);
  if (!member) {
    const error = new Error('El miembro no existe');
    error.status = 409;
    throw error;
  }
  return member;
};
*/

module.exports = {
	// getAll
	remove
};
