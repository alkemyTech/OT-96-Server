const categoriesService = require('../services/categories');

const create = async (req, res) => {
  try {
    const response = await categoriesService.create(req.body);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { create }