const categoriesRepository = require('../repositories/categories');

const update = async (id, categoryBody) => {
  return await categoriesRepository.update({ id, categoryBody });
};

module.exports = {
  update,
};
