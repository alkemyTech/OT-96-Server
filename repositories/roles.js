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

const create = async (data) => {
  await db.Role.create({
    name: data.name,
    description: data.description,
  });
};

const update = async (data, id) => {
  await db.Role.update(
    {
      name: data.name,
      description: data.description,
    },
    { where: { id: id } }
  );
};
const remove = async (id) => {
  await db.Role.destroy({ where: { id: id } });
};
module.exports = { getAll, getById, getByName, create, update, remove };
