const testimonialsRepository = require('../repositories/testimonials');

async function getAll() {
  return await testimonialsRepository.getAll();
}

async function getById(id) {
  return await testimonialsRepository.getById(id);
}

async function create(testimonial) {
  return await testimonialsRepository.create(testimonial);
}

async function update(id, testimonial) {
  return await testimonialsRepository.update(id, testimonial);
}

async function remove(id) {
  return await testimonialsRepository.remove(id);
}

module.exports = { getAll, getById, create, update, remove };