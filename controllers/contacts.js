const contactsService = require('../services/contacts');

const getAll = async (req, res, next) => {
  try {
    const response = await contactsService.getAll();

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
const create = async (req, res, next) => {
  try {
    const response = await contactsService.create(req.body);
    res.status(200).json({
      success: true,
      msg: `contact: ${response.name} has been created`,
      contacts: response
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  create
};
