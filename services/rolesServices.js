const rolesRepository = require("../repositories/roles");

const getAll = async () => {
  return await rolesRepository.getAll();
};

const getById = async (id) => {
  return await rolesRepository.getById(id);
};

const getByName = async (name) => {
  return await rolesRepository.getByName(name);
};

const create = async (data) => {
  return await rolesRepository.create(data);
};

const update = async (data, id) => {
  return await rolesRepository.update(data, id);
};

const remove = async (id) => {
  return await rolesRepository.remove(id);
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  update,
  remove,
};
