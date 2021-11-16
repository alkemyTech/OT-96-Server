const db = require('../models');

const create = async (data) => {
  const response = await db.Comment.create(data);
  return response;
};

module.exports = {
  create
};
