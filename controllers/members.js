const membersService = require('../services/members');

const getAll = async (req, res, next) => {
  try {
    const response = await membersService.getAll();
    return res.status(200).json({ data: response });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll
};
