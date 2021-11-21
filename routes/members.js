const express = require('express');
const membersRouter = express.Router();
const membersController = require('../controllers/members');
const authMiddleware = require('../middlewares/auths');
const membersMiddleware = require('../middlewares/members');
const pagination = require('../middlewares/pagination');

/**
 *@swagger
 *  {
 *    "components": {
 *      "schemas": {
 *        "Members": {
 *          "type": "object",
 *          "properties": {
 *            "name": {
 *              "type": "string",
 *              "description": "Name of a member"
 *             },
 *            "facebookUrl": {
 *              "type": "string",
 *              "description": "Facebook Url of a member"
 *            },
 *            "instagramUrl": {
 *              "type": "string",
 *              "description": "Instagram Url of a member"
 *            },
 *            "linkedinUrl": {
 *              "type": "string",
 *              "description": "LinkedIn Url of a member"
 *            },
 *            "image": {
 *              "type": "string",
 *              "description": "Image Url of a member"
 *            },
 *            "description": {
 *              "type": "string",
 *              "description": "Description of a member"
 *            }
 *          },
 *         "required": [ "name", "image" ],
 *          "example": {
 *            "name": "Robert",
 *            "facebookUrl": "https://es-la.facebook.com/robertdowneyjr",
 *            "instagramUrl": "https://www.instagram.com/robertdowneyjr",
 *            "linkedinUrl": "https://www.linkedin.com/in/robert-downey-jr-ab6703215/",
 *            "image": "https://es.web.img3.acsta.net/r_1280_720/pictures/20/09/22/14/31/4040599.jpg",
 *            "description": "Famous Hollywood Actor",
 *          }
 *       }
 *     }
 *   }
 *}
 */

membersRouter.get(
  '/',
  authMiddleware.isAdmin,
  pagination.validate,
  membersController.getAll
);

membersRouter.post(
  '/',
  authMiddleware.isLoggedUser,
  membersMiddleware.validateMember,
  membersController.create
);

membersRouter.put(
  '/:id',
  authMiddleware.isLoggedUser,
  membersController.update
);

membersRouter.delete('/:id', membersController.remove);

module.exports = membersRouter;
