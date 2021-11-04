const { isAdmin, isOwnedMember } = require('../middlewares/auths');
const categoriesController = require('../controllers/categories');

categoriesRouter.put(
  '/:id',
  isOwnedMember,
  isAdmin,
  categoriesController.update
);

module.exports = { categoriesRouter };
