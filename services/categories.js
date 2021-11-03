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

module.exports = {
  getAll,
  getById,
};
