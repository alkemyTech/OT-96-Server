var express = require('express');
var router = express.Router();

const { newsDataValidation } = require('../middlewares/newsDataValidation');
const newsController = require('../controllers/news');

router.put('/', newsDataValidation, newsController.create);

module.exports = router;
