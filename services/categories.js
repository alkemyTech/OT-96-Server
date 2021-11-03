const categoriesRepository = require('../repositories/categories');

const update = async (id, categoryBody) => {
  const categoryResponse = await categoriesRepository.update(id, categoryBody);
  if (!categoryResponse) {
    return {
      status: 404,
      message: 'Category not found',
    };
  }
  return categoryResponse;
};

module.exports = {
  update,
};
