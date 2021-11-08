const testimonialsService = require('./services/testimonials');

/* for future use

// list all testimonials
const getAll = async (req, res, next) => {
  try {
    const testimonials = await testimonialsService.getAll();
    return res.status(200).json({ data: testimonials });
  } catch (error) {
    next(error);
  }
}

// get one testimonial by id
const getById = async (req, res, next) => {
  try {
    const testimonial = await testimonialsService.getById(req.params.id);
    if (testimonial) {
      return res.status(201).json({ data: testimonials });
    } else {
      rconst error = new error(`Testimonial Not Found`);
      error.status = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
}

// create a new testimonial using body data
const create = async (req, res, next) => {
  try {
    const testimonial = await testimonialsService.create(req.body);
    return res.status(200).json({ data: testimonials });
  } catch (error) { 
    next(error);
  }
}

// update specific testimonial by id using body data
const update =async  (req, res, next) => {
  try {
    const testimonial = await testimonialsService.getById(req.params.id);
    if (testimonial) {
      await testimonialsService.update(req.params.id, req.body);
      return res.status(200).json({ data: testimonials });
    } else {
      const error = new error(`Testimonial Not Found`);
      error.status = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
}

// soft delete specific testimonial by id
const remove = async (req, res, next) => {
  try {
    const testimonial = await testimonialsService.getById(req.params.id);
    if (testimonial) {
      await testimonialsService.remove(req.params.id);
      return res.status(200).json({ data: testimonials });;
    } else {
      const error = new error(`Testimonial Not Found`);
      error.status = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { getAll, getById, create, update, remove };*/
