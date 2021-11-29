const express = require('express');
const membersRouter = express.Router();
const membersController = require('../controllers/members');
const authMiddleware = require('../middlewares/auths');
const membersMiddleware = require('../middlewares/members');
const pagination = require('../middlewares/pagination');

/**
 *@swagger
 *{
 *   "components": {
 *     "schemas": {
 *       "Member": {
 *         "type": "object",
 *         "properties": {
 *           "name": {
 *             "type": "string",
 *             "description": "Name of a member"
 *           },
 *           "facebookUrl": {
 *             "type": "string",
 *             "description": "Facebook Url of a member"
 *           },
 *           "instagramUrl": {
 *             "type": "string",
 *             "description": "Instagram Url of a member"
 *           },
 *           "linkedinUrl": {
 *             "type": "string",
 *             "description": "LinkedIn Url of a member"
 *           },
 *           "image": {
 *             "type": "string",
 *             "description": "Image Url of a member"
 *           },
 *           "description": {
 *             "type": "string",
 *             "description": "Description of a member"
 *           }
 *         },
 *        "required": [ "name", "image" ],
 *         "example": {
 *           "name": "Robert",
 *           "facebookUrl": "https://es-la.facebook.com/robertdowneyjr",
 *           "instagramUrl": "https://www.instagram.com/robertdowneyjr",
 *           "linkedinUrl": "https://www.linkedin.com/in/robert-downey-jr-ab6703215/",
 *           "image": "https://es.web.img3.acsta.net/r_1280_720/pictures/20/09/22/14/31/4040599.jpg",
 *           "description": "Famous Hollywood Actor",
 *         }
 *      }
 *    }
 *  }
 *}
 */

/**
 * @swagger
 *{
 *  "/members": {
 *    "get": {
 *      "summary": "Get all Members",
 *      "parameters": [
 *               {
 *                 "name": "page",
 *                 "in": "query",
 *                 "description": "Page number",
 *                 "type": "integer"
 *               }
 *             ],
 *      "tags": [ "Members" ],
 *      "security":[{"token":[]}],
 *      "responses": {
 *        "200": { "description": "All Members listed" }
 *      }
 *    }
 *  }
 *}
 */
membersRouter.get(
  '/',
  authMiddleware.isAdmin,
  pagination.validate,
  membersController.getAll
);

/**
 * @swagger
 *{
 *  "/members": {
 *    "post": {
 *      "summary": "Create a Member",
 *       "requestBody": {
 *        "required": true,
 *        "content": {
 *           "application/json": {
 *              "schema": {
 *                "type": "object",
 *                "$ref": "#/components/schemas/Member"
 *                }
 *            }
 *         }
 *      },
 *      "tags": [ "Members" ],
 *      "security":[{"token":[]}],
 *      "responses": {
 *        "200": { "description": "Member has been created!" },
 *        "500": { "description": "Internal server error" }
 *      }
 *    }
 *  }
 *}
 */
membersRouter.post(
  '/',
  authMiddleware.isAdmin,
  membersMiddleware.validateMember,
  membersController.create
);

/**
 * @swagger
 *{
 *  "/members/{id}": {
 *    "put": {
 *      "summary": "Update a Member by id",
 *      "parameters": [{
 *        "name": "id",
 *        "in": "path",
 *        "description": "Id of the Member to be updated",
 *        "required": true,
 *        "type": "integer"
 *      }],
 *       "requestBody": {
 *        "required": true,
 *        "content": {
 *           "application/json": {
 *              "schema": {
 *                "type": "object",
 *                "$ref": "#/components/schemas/Member"
 *                }
 *            }
 *         }
 *      },
 *      "tags": [ "Members" ],
 *      "security":[{"token":[]}],
 *      "responses": {
 *        "200": { "description": "Member has been updated!" },
 *        "404": { "description": "Member not found!" },
 *        "500": { "description": "Internal server error" }
 *      }
 *    }
 *  }
 *}
 */
membersRouter.put('/:id', authMiddleware.isAdmin, membersController.update);

/**
 * @swagger
 *{
 *  "/members/{id}": {
 *    "delete": {
 *      "summary": "Delete a Member by id",
 *      "parameters": [{
 *        "name": "id",
 *        "in": "path",
 *        "description": "Id of the Member to be deleted",
 *        "required": true,
 *        "type": "integer"
 *      }],
 *      "tags": [ "Members" ],
 *      "security":[{"token":[]}],
 *      "responses": {
 *        "200": { "description": "Member has been deleted!" },
 *        "404": { "description": "Member not found!" },
 *        "500": { "description": "Internal server error" }
 *      }
 *    }
 *  }
 *}
 */
membersRouter.delete('/:id', authMiddleware.isAdmin, membersController.remove);

module.exports = membersRouter;
