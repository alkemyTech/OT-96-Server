const newsService = require("../services/news");

const getAll = async (req, res, next) => {};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const news = await newsService.getById(id);
        res.status(200).json(news);
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
      news: response,
    });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const [response] = await newsService.update(req.body, req.params.id);
    if (!response) {
      const error = new Error(
        "ninguno de los parametros que mandaste coinciden"
      );
      error.status = 409;
      throw error;
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
