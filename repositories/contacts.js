const db = require('../models');

const getAll = async () => {
  const response = await db.Contact.findAll();
  return response;
};

const getById = async (id) => {
  const response = await db.Contact.findByPk(id);
  return response;
};

const create = async (data) => {
  const response = await db.Contact.create(data);
  return response;
};

const update = async (id, data) => {
  const response = await db.Contact.update(data, {
    where: {
      id
    }
  });
  return response;
};

const remove = async (id) => {
  const response = await db.Contact.destroy({
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
