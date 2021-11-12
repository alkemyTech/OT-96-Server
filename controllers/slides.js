const SlidesService = require('../services/slides');

const getAll = async (req, res, next) => {
  try {
    const slideList = await SlidesService.getAll();
    res.status(200).json(slideList);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const requestSlide = await SlidesService.getById(req.params.id);

    res.send(requestSlide);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const newSlide = await SlidesService.create(req.body);
    res.status(200).json({
      success: true,
      msg: `your Slide ${newSlide.title} has been created`,
      Slide: newSlide
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const updateSlide = await SlidesService.update(req.params.id, req.body);
    res.status(200).json({
      success: true,
      msg: `Slide ${req.params.id} is updated succesfully`,
      Slide: updateSlide
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const softDeleteSlide = await SlidesService.remove(req.params.id);
    res.status(201).json({
      success: true,
      msg: `your Slide ${req.body.name} has been deleted`
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getById, create, update, remove };
