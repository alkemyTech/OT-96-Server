const newsService = require("../services/news");

const update = async (req, res, next) => {
  try {
    const response = await newsService.update(req.body, req.params.id);
    if (response[0] !== 1) {
      const error = new Error("los parametros que mandaste no existen");
      error.status = 409;
      throw error;
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    next(error);
  }
};
module.exports = { update };
