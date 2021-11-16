const commentsMiddlewares = require('../middlewares/comments');

commentsRouter.post(
  '/',
  commentsMiddlewares.validateComments,
  commentsController.create
);
