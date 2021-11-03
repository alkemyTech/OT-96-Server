const newsService = require("../services/news");

const update = async (req, res) => {
  try {
    const response = await newsService.update(req.body, req.params.id);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = { update };
