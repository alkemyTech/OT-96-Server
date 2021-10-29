const organizationsRepository = require('../repositories/organizations');


async function getOrganizationPublic(id) {
  return await organizationsRepository.getOrganizationPublic(id);
}

//CRUD
async function getAll() {
  return await organizationsRepository.getAll();
}
async function getById(id) {
  return await organizationsRepository.getById(id);
}

async function create(organization) {
  return await organizationsRepository.create(organization);
}

async function update(id, organization) {
  return await organizationsRepository.update(id, organization);
}

async function remove(id) {
  return await organizationsRepository.remove(id);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getOrganizationPublic,
};
