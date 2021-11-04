const categoriesRepository = require('../repositories/categories');

const create = async ({ name, image, description }) => {
  const res = await categoriesRepository.getByName(name);
  if (res) {
    const error = new Error('categoria repetida');
    error.status = 409;
    throw error;
  }
  return await categoriesRepository.create({ name, image, description });
};

const update = async (id, { name, image, description }) => {
  try {
    const categoryResponse = await categoriesRepository.update(id, {
      name,
      image,
      description,
    });
    if (!categoryResponse) {
      throw new Error('Category not found');
    }
    return categoryResponse;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
  update,
};
