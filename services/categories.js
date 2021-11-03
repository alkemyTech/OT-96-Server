const categoriesRepository = require('../repositories/categories');

const update = async (id, categoryBody) => {
  try {
    const categoryResponse = await categoriesRepository.update(
      id,
      categoryBody
    );
    if (!categoryResponse) {
      return {
        status: 404,
        message: 'Category not found',
      };
    }
    return categoryResponse;
  } catch (error) {
    return {
      status: 500,
      message: 'Internal server error - Services',
    };
  }
};

module.exports = {
  update,
};
