const newsService = require('../services/news');

const getAll = async (req, res, next) => {
  try {
    const page = +req.query.page;
    const response = await newsService.getAll(req, page);

    res.status(200).json({
      status: 200,
      data: response.data,
      previousPage: response.previousPage,
      nextPage: response.nextPage
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const news = await newsService.getById(id);
    res.status(200).json(news);
  } catch (error) {
    next(error);
  }
};

const getCommentsByNewsId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comments = await newsService.getCommentsByNewsId(id);
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const response = await newsService.create(req.body);
    res.status(200).json({
      success: true,
      msg: `news: ${response.name} has been created`,
      data: response
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const response = await newsService.update(req.body, req.params.id);

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await newsService.remove(id);
    res.status(200).json({ message: 'the news was delete succesfully!' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  getCommentsByNewsId,
  create,
  update,
  remove
};
