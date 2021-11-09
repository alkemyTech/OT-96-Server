const db = require('../models');

const getAll = async () => {
  const response = await db.Activity.findAll();
  return response;
};

const getById = async (id) => {
  const response = await db.Activity.findByPk(id);
  return response;
};

const getByName = async (name) => {
  const response = await db.Activity.findOne({
    where: {
      name
    }
  });
  return response;
};

const create = async (data) => {
  const response = await db.Activity.create(data);
  return response;
};

const update = async (id, data) => {
  const response = await db.Activity.update(data, {
    where: {
      id
    }
  });
  return response;
};

const remove = async (id) => {
  const response = await db.Activity.destroy({
    where: {
      id
    }
  });
  return response;
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  update,
  remove
};
