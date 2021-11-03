const { Category } = require("../models");

// Get all categories
const getAll = async () => {
  const response = await Category.findAll({
    attributes: {
      exclude: ["description", "deletedAt", "createdAt", "updatedAt"],
    },
  });

  return response;
};

// Get one category by id
const getById = async (id) => {
  const category = await Category.findByPk(id);
  return category;
};
// Insert new category
const create = async (data) => {
  const response = await Category.create(data);

  return response;
};

// Update category
const update = async (id, data) => {
  const response = await Category.update(data, {
    where: {
      id: id,
    },
  });

  return response;
};

// Remove one category by id
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
