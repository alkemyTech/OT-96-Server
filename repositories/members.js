const db = require('../models');

const getAll = async () => {
  const response = await db.Member.findAll();
  return response;
};

module.exports = { getAll };
