const membersService = require('../services/members');

const getAll = async (req, res, next) => {
  try {
    const response = await membersService.getAll();
    return res.status(200).json({ data: response });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const response = await membersService.create(req.body);
    res.status(200).json({
      success: true,
      msg: `member: ${response.name} has been created`,
      member: response
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const response = await membersService.update(req.params.id, req.body);
    res.status(200).json({
      success: true,
      msg: `member ${req.params.id} is updated succesfully`,
      member: response
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  create,
  update
};
