const slidesRepository = require('../repositories/slides');

const getAll = async () => {
  return await slidesRepository.getAll();
};
const getById = async (id) => {
  try {
    const slide = await slidesRepository.getById(id);
    if (slide) {
      return slide;
    }
    const error = new Error('El slide no existe');
    error.status = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};

const create = async (organization) => {
  return await slidesRepository.create(organization);
};

const update = async (id, organization) => {
  try {
    const slide = await slidesRepository.getById(id);
    if (slide) {
      return await slidesRepository.update(id, organization);
    }
    const error = new Error('El slide no existe');
    error.status = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};

const remove = async (id) => {
  try {
    const slide = await slidesRepository.getById(id);
    if (slide) {
      return await slidesRepository.remove(id);
    }
    const error = new Error('El slide no existe');
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
  remove
};
