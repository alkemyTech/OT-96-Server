const categoriesRepository = require("../repositories/categories");

const create = async ({ name, image, description }) => {
  const res = await categoriesRepository.getByName(name);
  if (res) {
    const error = new Error("categoria repetida");
    error.status = 409;
    throw error;
  }
  return await categoriesRepository.create({ name, image, description });
};

module.exports = { create };
