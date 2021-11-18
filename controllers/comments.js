const commentsServices = require('../services/comments');

const getAll = async (req, res, next) => {
  try {
    const response = await commentsServices.getAll();
    return res.status(200).json({ data: response });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const response = await commentsServices.create(req.body);
    res.status(200).json({
      success: true,
      msg: `comment: ${response.id} has been created`,
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
