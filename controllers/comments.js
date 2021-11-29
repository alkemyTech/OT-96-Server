const commentsServices = require('../services/comments');

const getAll = async (req, res, next) => {
  try {
    const response = await commentsServices.getAll();
    return res.status(200).json(response);
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
      data: response
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await commentsServices.remove(id);
    res.status(200).json({ message: 'the comments was delete succesfully!' });
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
      data: response
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  remove,
  getAll,
  update,
  create
};
