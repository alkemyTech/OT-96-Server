const categoriesRepository = require('../repositories/categories');

const create = async ({name}) => {
  return await categoriesRepository.create({name})
}

module.exports = { create }
