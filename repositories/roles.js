const db = require('../models');

const getAll = async () => {
  const roles = await db.Role.findAll();
  return roles;
};

const getById = async (id) => {
  const rol = await db.Role.findByPk(id);
  return rol;
};

const getByName = async (name) => {
  const rol = await db.Role.findOne({
    where: {
      name
    }
  });
  return rol;
};

module.exports = {
  getAll,
  getById,
  getByName
};
