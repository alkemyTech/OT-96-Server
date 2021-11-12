const slidesService = require('../services/slides');

const getAll = async (req, res, next) => {
  try {
    const slideList = await slidesService.getAll();
    res.send(slideList);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const requestSlide = await slidesService.getById(req.params.id);

    res.send(requestSlide);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { newSlide, key } = await slidesService.create(req.body);
    res.status(200).json({
      success: true,
      msg: `your Slide ${newSlide.text} has been created`,
      key,
      Slide: newSlide
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedSlide = await slidesService.update(id, data);
    res.status(200).json({
      success: true,
      msg: `Slide ${id} was updated successfully`,
      slide: updatedSlide
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const softDeleteSlide = await slidesService.remove(req.params.id);
    res.status(201).json({
      success: true,
      msg: `your Slide ${req.body.name} has been deleted`
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getById, create, update, remove };
