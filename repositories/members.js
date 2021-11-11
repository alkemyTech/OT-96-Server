const db = require('../models');

const getAll = async () => {
  const response = await db.Member.findAll();
  return response;
};

const create = async (data) => {
  const response = await db.Member.create(data);
  return response;
};

module.exports = {
  getAll,
  create
};
