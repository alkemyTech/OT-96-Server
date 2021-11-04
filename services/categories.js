const categoriesRepository = require('../repositories/categories');

const update = async (id, categoryBody) => {
  try {
    const categoryResponse = await categoriesRepository.update(
      id,
      categoryBody
    );
    if (!categoryResponse) {
      throw new Error('Category not found');
    }
    return categoryResponse;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  update,
};
