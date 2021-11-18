const db = require('../models');

const getAll = async () => {
  const response = await db.Comment.findAll({
    order: [['createdAt', 'DESC']],
    attributes: ['body']
  });
  return response;
};

module.exports = { getAll };
