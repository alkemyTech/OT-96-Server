const SlidesService = require('../services/slides');

//////////CRUD//////7
// GET ALL Slides
async function getAll(req, res, next) {
  try {
    const SlideList = await SlidesService.getAll();
    res.send(SlideList);
  } catch (error) {
    next(error);
  }
}

//AND GET ONE Slide BY ID
async function getById(req, res, next) {
  try {
    const requestSlide = await SlidesService.getById(
      req.params.id
    );

    res.send(requestSlide);
  } catch (error) {
    next(error);
  }
}

// CREATE Slide
async function create(req, res, next) {
  try {
    const newSlide = await SlidesService.create(req.body);
    res.status(200).json({
      success: true,
      msg: `your Slide ${newSlide.title} has been created`,
      Slide: newSlide,
    });
  } catch (err) {
    next(err);
  }
}

// UPDATE Slide
async function update(req, res, next) {
  try {
    const updateSlide = await SlidesService.update(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      msg: `Slide ${req.params.id} is updated succesfully`,
      Slide: updateSlide,
    });
  } catch (err) {
    next(error);
  }
}

//Slide SOFT DELETE
async function remove(req, res, next) {
  try {
    const softDeleteSlide = await SlidesService.remove(
      req.params.id
    );
    res.status(201).json({
      success: true,
      msg: `your Slide ${req.body.name} has been deleted`
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { getAll, getById, create, update, remove };
