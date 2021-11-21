const db = require('../models');

const getAll = async (limit, offset) => {
  const response = await db.Member.findAll({
    limit: limit,
    offset: offset
  });
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
  const response = await db.Members.destroy({
    where: {
      id
    }
  });
  return response;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
