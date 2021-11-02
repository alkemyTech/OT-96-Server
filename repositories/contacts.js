const { Contacts } = require('../models/contacts');

const getAll = async () => {
  const response = await Contacts.findAll({});
  return response;
};

const getById = async (id) => {
  const response = await Contacts.findByPk(id);
  return response;
};

const create = async (data) => {
  const response = await Contacts.create(data);
  return response;
};

const update = async (id, data) => {
  const response = await Contacts.update(data, {
    where: {
      id: id,
    },
  });
  return response;
};

const remove = async (id) => {
  const response = await Contacts.destroy({
    where: {
      id: id,
    },
  });
  return response;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
