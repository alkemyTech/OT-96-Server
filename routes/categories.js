const { isAdmin, verifyToken } = require('../middlewares/auths');
const categoriesController = require('../controllers/categories');

categoriesRouter.put('/:id', verifyToken, isAdmin, categoriesController.update);

module.exports = { categoriesRouter };
