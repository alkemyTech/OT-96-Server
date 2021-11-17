const db = require('../models');

const getAll = async () => {
  const response = await db.Comment.findAll({
    order: [['createdAt', 'DESC']],
    attributes: ['body']
  });
  return response;
};

const getById = async (id) => {
  const response = await db.Comment.findByPk(id);
  return response;
};

const update = async (data, id) => {
  const response = await db.Comment.update(data, {
    where: {
      id
    }
  });
  return response;
};

module.exports = { getAll, update, getById };
