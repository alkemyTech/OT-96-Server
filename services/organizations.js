const organizationsRepository = require('../repositories/organizations');

const getOrganizationPublic = async (id) => {
  const organization = await organizationsRepository.getOrganizationPublic(id);
  return organization;
};

const getAll = async () => {
  const organizations = await organizationsRepository.getAll();
  if (organizations.length == 0) {
    const error = new Error(`No existen organizaciones`);
    error.status = 404;
    throw error;
  }
  return organizations;
};
const getById = async (id) => {
  const organization = await organizationsRepository.getById(id);
  if (!organization) {
    const error = new Error(`No existe la organización`);
    error.status = 404;
    throw error;
  }
  return organization;
};

const create = async (organization) => {
  return await organizationsRepository.create(organization);
};

const update = async (id, { name, image, phone, address }) => {
  const response = await organizationsRepository.getById(id);
  if (!response) {
    const error = new Error('La organización no existe.');
    error.status = 404;
    throw error;
  }
  await organizationsRepository.update(id, { name, image, phone, address });
  return await organizationsRepository.getById(id);
};

const remove = async (id) => {
  const response = await organizationsRepository.getById(id);
  if (!response) {
    const error = new Error('La organización no existe.');
    error.status = 404;
    throw error;
  }
  return await organizationsRepository.remove(id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getOrganizationPublic
};
