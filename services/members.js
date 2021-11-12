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

const create = async (data) => {
  const { name, facebookUrl, instagramUrl, linkedinUrl, image } = data;
  const response = await membersRepository.create({
    name,
    facebookUrl,
    instagramUrl,
    linkedinUrl,
    image
  });
  if (!response) {
    const error = new Error('there was an error in member creation');
    error.status = 403;
    throw error;
  }
  return response;
};

const update = async (id, data) => {
  const response = await membersRepository.getById(id);
  if (!response) {
    const error = new Error('Member not found');
    error.status = 404;
    throw error;
  }
  await membersRepository.update(id, data);
  return await membersRepository.getById(id);
};

const remove = async (id) => {
	const user = await membersRepository.getById(id);
	if (user) {
		const error = new Error('El Miembro no existe!.');
		error.status = 404;
		throw error;
	}
	await membersRepository.remove(id);
};

module.exports = {
  getAll,
  create,
  update,
  remove
};
