const SlidesRepository = require('../repositories/slides');

async function getAll() {
  return await SlidesRepository.getAll();
}
async function getById(id) {
  return await SlidesRepository.getById(id);
}

async function create(organization) {
  return await SlidesRepository.create(organization);
}

async function update(id, organization) {
  return await SlidesRepository.update(id, organization);
}

async function remove(id) {
  return await SlidesRepository.remove(id);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
