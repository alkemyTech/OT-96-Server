const testimonialsRepository = require('../repositories/testimonials');
const paginateRequest = require('../services/paginateRequest');
const limit = 10;

const getAll = async (req) => {
  const maxCount = await testimonialsRepository.getCount();
  const paginationData = paginateRequest.pagination(
    limit,
    maxCount,
    req,
    'testimonials'
  );
  const testimonials = await testimonialsRepository.getAll(
    limit,
    paginationData.offset
  );

  // respuesta por defecto (pagina intermedia)
  let response = {
    maxCount: paginationData.maxCount,
    previousPage: paginationData.previousPageUrl,
    nextPage: paginationData.nextPageUrl,
    data: testimonials
  };

  // respuestas pagina 1
  if (page == 1) {
    response.previousPage = null;
  }

  if (page == paginationData.lastPage) {
    //devuelve solo data
    response.nextPage = null;
  }

  return response;
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
  const serchTestimonial = await testimonialsRepository.getById(id);
  if (!serchTestimonial) {
    const error = new Error('testimonial not found');
    error.status = 404;
    throw error;
  } else {
    await testimonialsRepository.update(id, {
      name,
      image,
      content
    });
    return await testimonialsRepository.getById(id);
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
