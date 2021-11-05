const activitiesService = require('../services/activities');
const awsServices = require('../services/images');

const create = async (req, res, next) => {
  try {
    const response = await activitiesService.create(req.body);
    res.status(200).json({
      success: true,
      msg: `Activity ${req.body.name} is created succesfully`,
      Activity: response,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const response = await activitiesService.update(id, body);
    res.status(200).json({
      success: true,
      msg: `Activity ${req.body.name} was updated succesfully`,
      Activity: response,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  update,
};
