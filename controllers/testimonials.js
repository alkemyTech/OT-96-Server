const testimonialsService = require('./services/testimonials');

// list all testimonials
async function getAll(req, res) {
  try {
    const testimonials = await testimonialsService.getAll();
    res.status(201).send(testimonials);
  } catch (e) {
    res.status(500).send(e);
  }
}

// get one testimonial by id
async function getById(req, res) {
  try {
    const testimonial = await testimonialsService.getById(req.params.id);
    if (testimonial) {
      res.status(201).send(testimonial)
    } else {
      res.status(404).send("Testimonial Not Found")
    }
  } catch (e) {
    res.status(400).send(e);
  }
}

// create a new testimonial using body data
async function create(req, res) {
  try {
    const testimonial = await testimonialsService.create(req.body);
    res.status(201).send(testimonial);
  } catch (err) {
    res.status(400).send(e);
  }
}

// update specific testimonial by id using body data
async function update(req, res) {
  try {
    const testimonial = await testimonialsService.getById(req.params.id);
    if (testimonial) {
      await testimonialsService.update(req.params.id, req.body);
      res.status(201).send("Testimonial updated")
    } else {
      res.status(404).send("Testimonial Not Found")
    }
  } catch (e) {
    res.status(400).send(e);
  }
}

// soft delete specific testimonial by id
async function remove(req, res) {
  try {
    const testimonial = await testimonialsService.getById(req.params.id);
    if (testimonial) {
      await testimonialsService.remove(req.params.id);
      res.status(201).send("Testimonial deleted");
    } else {
      res.status(404).send("Testimonial Not Found");
    }
  } catch (e) {
    res.status(400).send(e);
  }
}

module.exports = { getAll, getById, create, update, remove };