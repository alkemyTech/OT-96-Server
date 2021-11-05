const db = require("../models");

const getAll = async () => {
  const roles = await db.Role.findAll();
  console.log(roles);
  return roles;
};

const getById = async (id) => {
  const rol = await db.Role.findByPk(id);
  console.log(rol);
  return rol;
};

const getByName = async (name) => {
  const rol = await db.Role.findOne({ where: { name: name } });

  return rol;
};
module.exports = { getAll, getById, getByName };
