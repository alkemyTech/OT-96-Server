const db = require('../models');

const getAll = async () => {
  const response = await db.Member.findAll();
  return response;
};

const getById = async (id) => {
  const response = await db.Member.findByPk(id);
  return response;
};

const create = async (data) => {
  const response = await db.Member.create(data);
  return response;
};

const update = async (id, data) => {
  const response = await db.Member.update(data, {
    where: {
      id
    }
  });
  return response;
};

const remove = async (id) => {
	const respose = await db.Members.destroy({
		where: {
			id
		}
	});
	return respose;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
