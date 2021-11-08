const testimonialsRepository = require('../repositories/testimonials');

const getAll = async () => {
  return await testimonialsRepository.getAll();
};

const getById = async (id) => {
  return await testimonialsRepository.getById(id);
};

const create = async (testimonial) => {
  return await testimonialsRepository.create(testimonial);
};

const update = async (id, testimonial) => {
  try {
    const response = await testimonialsRepository.getById(id);
    if (response) {
      return await testimonialsRepository.update(id, testimonial);
    }
    const error = new Error('El testimonio no existe');
    error.status = 409;
    throw error;
  } catch (error) {
    next(error);
  }
};

const remove = async (id) => {
  try {
    const response = await testimonialsRepository.getById(id);
    if (response) {
      return await testimonialsRepository.remove(id);
    }
    const error = new Error('El testimonio no existe');
    error.status = 409;
    throw error;
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getById, create, update, remove };
