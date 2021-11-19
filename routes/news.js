const express = require('express');
const newsRouter = express.Router();
const newsController = require('../controllers/news');
const authMiddleware = require('../middlewares/auths');
const newsMiddleware = require('../middlewares/news');

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
 *            "categoryId": 1
 *          }
 *       }
 *     }
 *   }
 *}
 */

/**
 * @swagger
 *{
 *    "/news/{id}": {
 *       "get": {
 *             "summary": "Get a news by id",
 *             "parameters": [
 *               {
 *                  "name": "authorization",
 *                  "in": "header",
 *                  "description": "The access token of the user",
 *                  "required": false,
 *                  "type": "string"
 *                },
 *                 {
 *                 "name": "id",
 *                 "in": "path",
 *                 "description": "The id of the news",
 *                 "required": false,
 *                 "type": "integer",
 *                 "example": 1
 *                 }
 *             ],
 *             "tags": [ "News" ],
 *             "responses": {
 *                 "200": {
 *                    "description": "successful operation",
 *                    "content": {
 *                        "application/json": {
 *                            "schema": {
 *                                "type": "object",
 *                                "$ref": "#/components/schemas/News"
 *                             }
 *                        }
 *                     }
 *
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
 *             "parameters": [
 *                {
 *                   "name": "body",
 *                   "in": "body",
 *                   "description": "The news to create",
 *                   "required": true,
 *                   "schema": {
 *                     "$ref": "#/components/schemas/News"
 *                   }
 *                },
 *                {
 *                  "name": "Acces token",
 *                  "in": "header",
 *                  "description": "The access token of the user",
 *                  "required": true,
 *                  "type": "string"
 *                }
 *             ],
 *             "tags": [ "News" ],
 *             "responses": {
 *                 "200": {
 *                    "description": "News has been created",
 *                    "schema": {
 *                      "$ref": "#/components/schemas/News"
 *                    }
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
 *    "/news:id": {
 *       "put": {
 *             "summary": "Update a news by id",
 *             "parameters": [
 *               {
 *                 "name": "id",
 *                 "in": "params",
 *                 "description": "The id of the news",
 *                 "required": true,
 *                 "type": "integer"
 *               },
 *               {
 *                 "name": "body",
 *                 "in": "body",
 *                 "description": "The news to update",
 *                 "required": true,
 *                 "schema": {
 *                     "$ref": "#/components/schemas/News"
 *                  }
 *               },
 *               {
 *                   "name": "Acces token",
 *                   "in": "header",
 *                   "description": "The access token of the user",
 *                   "required": true,
 *                   "type": "string"
 *               }
 *             ],
 *             "tags": [ "News" ],
 *             "responses": {
 *                 "200": {
 *                    "description": "News has been Update",
 *                    "schema": {
 *                      "$ref": "#/components/schemas/News"
 *                    }
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
 *              },
 *              {
 *                "name": "access token",
 *                "in": "header",
 *                "description": "The access token of the user",
 *                "required": true,
 *                "type": "token"
 *             }
 *             ],
 *             "tags": [ "News" ],
 *             "responses": {
 *                 "200": {
 *                    "description": "News has been Delete",
 *                    "schema": {
 *                      "$ref": "#/components/schemas/News"
 *                    }
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
