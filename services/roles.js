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
module.exports = {
  getAll,
  getById,
  getByName,
};
