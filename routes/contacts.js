const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contacts');
const authMiddleware = require('../middlewares/auths');

router.get('/', authMiddleware.isAdmin, contactController.getAll);

module.exports = router;
