const commentsServices = require('../services/comments');

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
  create
};
