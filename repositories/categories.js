const { Category } = require("../models");

const getAll = async () => {
  
  const response = await Category.findAll({});

  return response;
};

const getById = async (id) => {
  const category = await Category.findByPk(id);
  return category;
};

// Insert new category
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
