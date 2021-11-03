const { Category } = require("../models");

const getAll = async () => {
  const response = await Category.findAll({
    attributes: {
      exclude: ["description", "deletedAt", "createdAt", "updatedAt"],
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

const update = async (id, data) => {
  const response = await Category.update(data, {
    where: {
      id,
    },
  });
  return response;
};

const remove = async (id) => {
  const response = await Category.destroy({
    where: {
      id,
    },
  });
  return response;
};

const getByName = async (name) => {
  const response = await Category.findOne({
    where: { name },
  });
  return response;
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  update,
  remove,
};
