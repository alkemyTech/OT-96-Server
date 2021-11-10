const testimonialsRepository = require('../repositories/testimonials');

const getAll = async () => {
  const testimonials = await testimonialsRepository.getAll();
  if (testimonials.length == 0) {
    const error = new Error('No hay testimonios');
    error.status = 404;
    throw error;
  }
  return testimonials;
};

const getById = async (id) => {
  const testimonial = await testimonialsRepository.getById(id);
  if (!testimonial) {
    const error = new Error('testimonial not found');
    error.status = 404;
    throw error;
  }
  return testimonial;
};

const create = async (testimonial) => {
  return await testimonialsRepository.create(testimonial);
};

const update = async (id, { name, image, content }) => {
  const response = await testimonialsRepository.getById(id);
  if (!response) {
    const error = new Error('El testimonio no existe');
    error.status = 404;
    throw error;
  } else {
    const updatedTestimonial = await testimonialsRepository.update(id, {
      name,
      image,
      content
    });
    return updatedTestimonial;
  }
};

const remove = async (id) => {
  const response = await testimonialsRepository.getById(id);
  if (!response) {
    const error = new Error('El testimonio no existe');
    error.status = 409;
    throw error;
  }
  return await testimonialsRepository.remove(id);
};

module.exports = { getAll, getById, create, update, remove };
