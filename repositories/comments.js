const db = require('../models');

const create = async (data) => {
	const response = await db.Comment.create(data);
	return response;
};

const getAll = async () => {
	const response = await db.Comment.findAll({
		order: [ [ 'createdAt', 'DESC' ] ],
		attributes: [ 'body' ]
	});
	return response;
};
const remove = async (id) => {
	const response = await db.Comment.destroy({
		where: {
			id
		}
	});
	return response;
};

const getById = async (id) => {
	const response = await db.Comment.findByPk(id);
	return response;
};

const update = async (data, id) => {
	const response = await db.Comment.update(data, {
		where: {
			id
		}
	});
	return response;
};

module.exports = { getAll, update, getById, create, remove };
