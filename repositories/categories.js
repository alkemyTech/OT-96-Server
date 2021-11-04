const { Category } = require('../models/category');

// Get all categories
const getAll = async () => {
  const response = await Category.findAll({
    attributes: {
      exclude: ['description', 'deletedAt', 'createdAt', 'updatedAt'],
    },
  });

  return response;
};

const getById = async (id) => {
  const response = await Category.findByPk(id);

  return response;
};

const create = async (data) => {
  const response = await Category.create(data);

  return response;
};

const update = async ({ id, data }) => {
  const response = await Category.update(data, {
    where: {
      id: id,
    },
  });

  return response;
};

const remove = async (id) => {
  const response = await Category.destroy({
    where: {
      id: id,
    },
  });

  return response;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
