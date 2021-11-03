const categoriesRepository = require("../repositories/categories");

const create = async ({ name, image, description }) => {
  const res = await categoriesRepository.getByName(name);
  if (res) return false;
  return await categoriesRepository.create({ name, image, description });
};

module.exports = { create };
