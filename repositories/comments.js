const db = require('../models');

const create = async (data) => {
  const response = await db.Comment.create(data);
  return response;
};

const getAll = async () => {
  const response = await db.Comment.findAll({
    order: [['createdAt', 'DESC']],
    attributes: ['body']
  });
  return response;
};

module.exports = { getAll, create };
