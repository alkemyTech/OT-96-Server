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

const update = async (id, { body }) => {
	const comments = await commentsRepository.getById(id);
	if (!comments) {
		const error = new Error('Comment not found');
		error.status = 409;
		throw error;
	}
	await commentsRepository.update({ body }, id);

	return await commentsRepository.getById(id);
};

module.exports = {
	getAll,
	create,
	remove,
	update
};
