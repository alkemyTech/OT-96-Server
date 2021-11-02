const categoriesRepository = require('../repositories/categories');

const create = async ({ name, image, description }) => {
  return await categoriesRepository.create({ name, image, description })
}

module.exports = { create }
