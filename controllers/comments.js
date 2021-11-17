const commentsServices = require('../services/comments');

const getAll = async (req, res, next) => {
  try {
    const response = await commentsServices.getAll();
    return res.status(200).json({ data: response });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const response = await commentsServices.update(req.params.id, req.body);
    res.status(200).json({
      success: true,
      msg: `commets ${req.params.id} is updated succesfully`,
      Comment: response
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  update
};
