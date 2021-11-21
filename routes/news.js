const express = require('express');
const newsRouter = express.Router();
const newsController = require('../controllers/news');
const authMiddleware = require('../middlewares/auths');
const newsMiddleware = require('../middlewares/news');
const pagination = require('../middlewares/pagination');

/**
 *@swagger
 *  {
 *    "components": {
 *      "schemas": {
 *        "News": {
 *          "type": "object",
 *          "properties": {
 *            "name": {
 *              "type": "string",
 *              "description": "The name of the news"
 *             },
 *            "content": {
 *              "type": "string",
 *              "description": "The content of the news"
 *            },
 *            "type": {
 *              "type": "string",
 *              "description": "The type of the news"
 *            },
 *            "categoryId": {
 *              "type": "integer",
 *              "description": "The category of the news"
 *            }
 *          },
 *         "required": [  "name", "content", "type", "categoryId" ],
 *          "example": {
 *            "name": "News 1",
 *            "content": "This is the content of the news",
 *            "type": "news",
 *            "image": "asdasd",
 *            "categoryId": 1
 *          }
 *       }
 *     }
 *   }
 *}
 */

/**
 * @swagger
 * "/news": {
 *    "get": {
 *      "summary": "list of all News",
 *      "parameters": [
 *               {
 *                 "name": "page",
 *                 "in": "query",
 *                 "description": "Page number",
 *                 "type": "integer"
 *               }
 *             ],
 *      "tags": ["News"],
 *      "responses": {
 *        "200":{"description":"succesful"},
 *        "content": {
 *            "application/json": {
 *              "schema": {
 *                "type": "object",
 *                "items": {
 *                  "$ref": "#/components/schemas/News"
 *                 }
 *               }
 *          }
 *      },
 *     "404":{"description":"Category not found"},
 *     "500":{"description":"Internal Server Error"}
 *     },
 *     "security":[{"token":[]}]
 *    }
 * }
 */

newsRouter.get(
  '/',
  authMiddleware.isAdmin,
  pagination.validate,
  newsController.getAll
);

/**
 * @swagger
 *{
 *    "/news/{id}": {
 *       "get": {
 *             "summary": "Get a news by id",
 *             "tags": [ "News" ],
 *             "parameters": [
 *                 {
 *                 "name": "id",
 *                 "in": "path",
 *                 "description": "The id of the news",
 *                 "required": false,
 *                 "type": "integer",
 *                 "example": 1
 *                 }
 *             ],
 *             "security":[{"token":[]}],
 *             "responses": {
 *                 "200": {
 *                    "description": "successful operation"
 *                 },
 *                 "404": {
 *                   "description": "News not found"
 *                 },
 *                 "500": {
 *                   "description": "Internal server error"
 *                 }
 *              }
 *          }
 *      }
 *   }
 */
newsRouter.get('/:id', authMiddleware.isAdmin, newsController.getById);

/**
 * @swagger
 *{
 *    "/news": {
 *       "post": {
 *             "summary": "Create a news",
 *      "requestBody": {
 *        "required": true,
 *        "content": {
 *           "application/json": {
 *              "schema": {
 *                "type": "object",
 *                "$ref": "#/components/schemas/News"
 *                }
 *            }
 *         }
 *      },
 *             "tags": [ "News" ],
 *            "security":[{"token":[]}],
 *             "responses": {
 *                 "200": {
 *                    "description": "News has been created"
 *                 },
 *                 "500": {
 *                   "description": "Internal server error"
 *                 }
 *              }
 *          }
 *      }
 *   }
 */
newsRouter.post(
  '/',
  authMiddleware.isAdmin,
  newsMiddleware.validateNew,
  newsController.create
);

/**
 * @swagger
 *{
 *    "/news/{id}": {
 *       "put": {
 *             "summary": "Update a news by id",
 *             "parameters": [
 *               {
 *                 "name": "id",
 *                 "in": "path",
 *                 "description": "The id of the news",
 *                 "required": true,
 *                 "type": "integer"
 *               },
 *             ],
 *       "requestBody": {
 *        "required": true,
 *        "content": {
 *           "application/json": {
 *              "schema": {
 *                "type": "object",
 *                "$ref": "#/components/schemas/News"
 *                }
 *            }
 *         }
 *      },
 *             "tags": [ "News" ],
 *             "security":[{"token":[]}],
 *             "responses": {
 *                 "200": {
 *                    "description": "News has been Update"
 *                 },
 *                 "404": {
 *                   "description": "News not found"
 *                 },
 *                 "500": {
 *                   "description": "Internal server error"
 *                 }
 *              }
 *          }
 *      }
 *   }
 */
newsRouter.put('/:id', authMiddleware.isAdmin, newsController.update);

/**
 * @swagger
 *{
 *    "/news/{id}/comments": {
 *       "get": {
 *             "summary": "Get a comment by novelty",
 *             "parameters": [
 *                 {
 *                 "name": "id",
 *                 "in": "path",
 *                 "description": "The id of the news",
 *                 "required": false,
 *                 "type": "integer",
 *                 "example": 1
 *                 }
 *             ],
 *             "tags": [ "Comments" ],
 *             "security":[{"token":[]}],
 *             "responses": {
 *                 "200": {
 *                    "description": "successful operation"
 *                 },
 *                 "404": {
 *                   "description": "News not found"
 *                 },
 *                 "500": {
 *                   "description": "Internal server error"
 *                 }
 *              }
 *          }
 *      }
 *   }
 */
newsRouter.get(
  '/:id/comments',
  authMiddleware.isLoggedUser,
  newsController.getCommentsByNewsId
);

/**
 * @swagger
 *{
 *    "/news/{id}": {
 *       "delete": {
 *             "summary": "Delete a news by id",
 *             "parameters": [
 *               {
 *                 "name": "id",
 *                 "in": "path",
 *                 "description": "The id of the news",
 *                 "required": true,
 *                 "type": "integer"
 *              }
 *             ],
 *             "tags": [ "News" ],
 *             "security":[{"token":[]}],
 *             "responses": {
 *                 "200": {
 *                    "description": "News has been Delete"
 *                 },
 *                 "404": {
 *                   "description": "News not found"
 *                 },
 *                 "500": {
 *                   "description": "Internal server error"
 *                 }
 *              }
 *          }
 *      }
 *   }
 */
newsRouter.delete('/:id', authMiddleware.isAdmin, newsController.remove);

module.exports = newsRouter;
