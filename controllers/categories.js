const categoriesService = require("../services/categories");

const create = async (req, res) => {
  try {
    const response = await categoriesService.create(req.body);
    if (!response) {
      res.status(400).json({ ok: false, msg: "categoria repetida" });
    }
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { create };
