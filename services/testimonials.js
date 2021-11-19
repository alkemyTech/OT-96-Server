const testimonialsRepository = require('../repositories/testimonials');

const getAll = async (paginationData) => {
  const { limit, offset, maxCount, page, lastPage, previousPageUrl, nextPageUrl, lastPageUrl } = paginationData;

  const testimonials = await testimonialsRepository.getAll(limit, offset);

  // respuesta por defecto (pagina intermedia)
  let response = {
    count: testimonials.length,
    maxCount: maxCount,
    previousPage: previousPageUrl,
    nextPage: nextPageUrl,
    lastPage: lastPageUrl,
    data: testimonials
  };

  // respuestas pagina 1
  if (page == 1) {
    if (page == lastPage) {
      //devuelve solo data
      response.previousPage = null;
      response.nextPage = null;
    }
    if (page < lastPage) {
      //devuelve data + nextPage
      response.previousPage = null;
    }
  }

  // respuesta ultima pagina
  if (page > 1 && page == lastPage) {
    //devuelve data + previousPage
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
