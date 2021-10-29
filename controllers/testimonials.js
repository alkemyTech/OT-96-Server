const testimonialsService = require('./services/testimonials');

/* for future use

// list all testimonials
async function getAll(req, res, next) {
  try {
    const testimonials = await testimonialsService.getAll();
    res.status(201).send(testimonials);
  } catch (err) {
    next(err);
  }
}

// get one testimonial by id
async function getById(req, res, next) {
  try {
    const testimonial = await testimonialsService.getById(req.params.id);
    if (testimonial) {
      res.status(201).send(testimonial)
    } else {
      res.status(404).send("Testimonial Not Found")
    }
  } catch (err) {
    next(err);
  }
}

// create a new testimonial using body data
async function create(req, res, next) {
  try {
    const testimonial = await testimonialsService.create(req.body);
    res.status(201).send(testimonial);
  } catch (err) {
    next(err);
  }
}

// update specific testimonial by id using body data
async function update(req, res, next) {
  try {
    const testimonial = await testimonialsService.getById(req.params.id);
    if (testimonial) {
      await testimonialsService.update(req.params.id, req.body);
      res.status(201).send("Testimonial updated")
    } else {
      res.status(404).send("Testimonial Not Found")
    }
  } catch (err) {
    next(err);
  }
}

// soft delete specific testimonial by id
async function remove(req, res, next) {
  try {
    const testimonial = await testimonialsService.getById(req.params.id);
    if (testimonial) {
      await testimonialsService.remove(req.params.id);
      res.status(201).send("Testimonial deleted");
    } else {
      res.status(404).send("Testimonial Not Found");
    }
  } catch (err) {
    next(err);
  }
}

module.exports = { getAll, getById, create, update, remove };*/