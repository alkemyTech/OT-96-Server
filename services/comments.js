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

const remove = async (id) => {
	const comments = await commentsRepository.remove(id);
	if (!comments) {
		const error = new Error('No se ha encontrado el comentario');
		error.status = 404;
		throw error;
	}
	return await commentsRepository.remove(id);
};

module.exports = {
	getAll,
	create,
	remove
};
