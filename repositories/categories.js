const db = require('../models');

const getAll = async () => {
  const categories = await db.Category.findAll();
  return categories;
};

const getById = async (id) => {
  const response = await db.Category.findByPk(id);
  return response;
};

const getByName = async (name) => {
  const response = await db.Category.findOne({
    where: {
      name
    }
  });
  return response;
};

const create = async (data) => {
  const response = await db.Category.create(data);
  return response;
};

const update = async (id, data) => {
  const response = await db.Category.update(data, {
    where: {
      id
    }
  });
  return response;
};

const remove = async (id) => {
  const response = await db.Category.destroy({
    where: {
      id
    }
  });
  return response;
};

const getAllNames = async (limit, offset) => {
  const categories = await db.Category.findAll({
    attributes: {
      exclude: ['description', 'image', 'deletedAt', 'createdAt', 'updatedAt']
    },
    limit: limit,
    offset: offset
  });
  return categories;
};

const getCount = async () => {
  const response = await db.Category.count();
  return response;
}

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  update,
  remove,
  getAllNames,
  getCount
};
