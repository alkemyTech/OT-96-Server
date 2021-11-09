const slidesRepository = require('../repositories/slides');

const getAll = async () => {
  const slides = await slidesRepository.getAll();
  if (slides.length == 0) {
    const error = new Error('No hay slides');
    error.status = 404;
    throw error;
  }
  return slides;
};
const getById = async (id) => {
  const slide = await slidesRepository.getById(id);
  if (!slide) {
    const error = new Error('El slide no existe');
    error.status = 404;
    throw error;
  }
  return slide;
};

const create = async (organization) => {
  return await slidesRepository.create(organization);
};

const update = async (id, organization) => {
  const slide = await slidesRepository.getById(id);
  if (!slide) {
    const error = new Error('El slide no existe');
    error.status = 404;
    throw error;
  }
  return await slidesRepository.update(id, organization);
};

const remove = async (id) => {
  const slide = await slidesRepository.getById(id);
  if (!slide) {
    const error = new Error('El slide no existe');
    error.status = 404;
    throw error;
  }
  return await slidesRepository.remove(id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
