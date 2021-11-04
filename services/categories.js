const categoriesRepository = require("../repositories/categories");

//example:
const getAll = async () => {
  return await categoriesRepository.getAll();
};

const getById = async (id) => {
  const category = await categoriesRepository.getById(id);
    
  if (category) {
    return category;
  }
  const error = new Error("No existe la categoria!");
  error.status = 404;
  throw error;
};

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
  getAll,
  getById,
  update,
}