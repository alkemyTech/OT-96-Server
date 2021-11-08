const organizationsRepository = require('../repositories/organizations');

const getOrganizationPublic = async (id) => {
  try {
    const organization = await organizationsRepository.getOrganizationPublic(
      id
    );
    if (organization) {
      return organization;
    }
    const error = new Error(`No existe la organización`);
    error.status = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};

const getAll = async () => {
  try {
    const organizations = await organizationsRepository.getAll();
    if (organizations.length > 0) {
      return organizations;
    }
    const error = new Error(`No existen organizaciones`);
    error.status = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};
const getById = async (id) => {
  try {
    const organization = await organizationsRepository.getById(id);
    if (organization) {
      return organization;
    }
    const error = new Error(`No existe la organización`);
    error.status = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};

const create = async (organization) => {
  return await organizationsRepository.create(organization);
};

async function update(id, organization) {
  try {
    const response = await organizationsRepository.getById(id);
    if (response) {
      return await organizationsRepository.update(id, organization);
    }
    const error = new Error('La organización no existe.');
    error.status = 404;
    throw error;
  } catch (error) {
    next(error);
  }
}

const remove = async (id) => {
  try {
    const response = await organizationsRepository.getById(id);
    if (response) {
      return await organizationsRepository.remove(id);
    }
    const error = new Error('La organización no existe.');
    error.status = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getOrganizationPublic
};
