const db = require('../models');

const getAll = async () => {
  const response = await db.News.findAll({
    include: [
      {
        model: db.Category
      }
    ]
  });
  return response;
};

const getById = async (id) => {
  const response = await db.News.findByPk(id, {
    include: [
      {
        model: db.Category,
        as: 'category'
      }
    ]
  });
  return response;
};
const getByCategoryId = async (categoryId) => {
  const response = await db.News.findAll({
    where: {
      categoryId
    }
  });
  return response;
};

const create = async (data) => {
  const response = await db.News.create(data);
  return response;
};

const update = async (data, id) => {
  const response = await db.News.update(data, {
    where: {
      id
    }
  });
  return response;
};

const remove = async (id) => {
  const response = await db.News.destroy({
    where: {
      id
    }
  });
  return response;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByCategoryId
};
