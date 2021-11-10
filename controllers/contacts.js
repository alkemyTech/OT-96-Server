const contactsService = require('../services/contacts');

const getAll = async (req, res, next) => {
  try {
    const response = await contactsService.getAll();

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll
};
