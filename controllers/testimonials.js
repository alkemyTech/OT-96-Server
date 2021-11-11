const testimonialsService = require('../services/testimonials');

// list all testimonials
/* const getAll = async (req, res, next) => {
  try {
    const testimonials = await testimonialsService.getAll();
    return res.status(200).json({ data: testimonials });
  } catch (error) {
    next(error);
  }
} */

const getById = async (req, res, next) => {
  try {
    const testimonial = await testimonialsService.getById(req.params.id);
    if (testimonial) {
      return res.status(201).json({ data: testimonial });
    } else {
      const error = new error(`Testimonial Not Found`);
      error.status = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};

// create a new testimonial using body data
/* const create = async (req, res, next) => {
  try {
    const testimonial = await testimonialsService.create(req.body);
    return res.status(200).json({ data: testimonials });
  } catch (error) { 
    next(error);
  }
} */

const update = async (req, res, next) => {
  try {
    const response = await testimonialsService.update(req.params.id, req.body);
    res.status(200).json({
      success: true,
      msg: `testimonials: ${response.name} has been updated`,
      testimonials: response
    });
  } catch (error) {
    next(error);
  }
};

// soft delete specific testimonial by id
/* const remove = async (req, res, next) => {
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
} */

module.exports = { getById, update };
