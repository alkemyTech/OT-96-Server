const db = require('../models');

const getAll = async () => {
  const response = await db.Role.findAll();
  return response;
};

const getById = async (id) => {
  const response = await db.Role.findByPk(id);
  return response;
};

const getByName = async (name) => {
  const response = await db.Role.findOne({
    where: {
      name
    }
  });
  return response;
};

module.exports = {
  getAll,
  getById,
  getByName
};
