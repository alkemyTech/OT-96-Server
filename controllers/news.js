const newsService = require("../services/news");

const update = async (req, res) => {
  try {
    const response = await newsService.update(req.body, req.params.id);
    if (!response) {
      return res
        .status(400)
        .json({ ok: false, msg: "la noticia con el id no existe" });
    }
    if (response[0] !== 1) {
      return res
        .status(400)
        .json({ ok: false, msg: "los parametros que mandaste no existen" });
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = { update };
