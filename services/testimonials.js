const testimonialsRepository = require('../repositories/testimonials');
const limit = 10;

const getAll = async (req) => {
  let page = Number(req.query.page);
  const count = await testimonialsRepository.getCount();
  const lastPage = Math.ceil(count / limit);
  
  // comprobacion page > lastPage
  if (page > lastPage) {
    page = 1;
  }
  
  const offset = (page - 1) * limit;
  const previousPage = page - 1;
  const nextPage = page + 1;
  
  const baseUrl = `${req.protocol}://${req.get('host')}/testimonials`;
  const previousPageUrl = baseUrl + `?page=${previousPage}`;
  const nextPageUrl = baseUrl + `?page=${nextPage}`;

  const testimonials = await testimonialsRepository.getAll(limit, offset);

  let response = {};

  // Response in case no testimonials
  if (!testimonials) {
    response = {
      data: []
    };
  }

  // page 1
  if (page == 1) {
    if (page == lastPage) {
      //devuelve solo data
      response = {
        data: testimonials
      };
    }
    if (page < lastPage) {
      //devuelve nextPage
      response = {
        data: testimonials,
        nextPage: nextPageUrl
      };
    }
  }

  // page mayor a 1
  if (page > 1) {
    // page intermedia
    if (page < lastPage) {
      //devuelve previousPage & nextPage
      response = {
        data: testimonials,
        previousPage: previousPageUrl,
        nextPage: nextPageUrl
      };
    }
    // ultima page
    if (page == lastPage) {
      //devuelve previousPage
      response = {
        data: testimonials,
        previousPage: previousPageUrl
      };
    }
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
