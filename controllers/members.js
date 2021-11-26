const membersService = require('../services/members');

const getAll = async (req, res, next) => {
  try {
    const response = await membersService.getAll(req);

    res.status(200).json({
      status: 200,
      response: response
    });
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
const remove = async (req, res, next) => {
  try {
    const response = await membersService.remove(req.params.id);
    return res.status(200).json({ msg: 'the member was delete succesfully!' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove
};
