const testimonialsService = require('../services/testimonials');

const getAll = async (req, res, next) => {
  try {
    const response = await testimonialsService.getAll(req.body);
    res.status(200).json({
      status: 200,
      ...response 
    });
  } catch (error) {
    next(error);
  }
};

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

const create = async (req, res, next) => {
  try {
    const testimonial = await testimonialsService.create(req.body);
    res.status(200).json({
      success: true,
      msg: `testimonial:${testimonial.name}  has been created`,
    });
  } catch (error) {
    next(error);
  }
};

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

const remove = async (req, res, next) => {
  try {
    const testimonial = await testimonialsService.getById(req.params.id);
    if (!testimonial) {
      const error = new error(`Testimonial Not Found`);
      error.status = 404;
      throw error;
    }
    await testimonialsService.remove(testimonial.id);

    res.status(200).json({
      status: 200,
      success: true,
      msg: `Testimonial ${req.params.id} removed succesfully`
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getById, create, update, remove };
