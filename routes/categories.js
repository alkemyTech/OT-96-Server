const express = require('express');
const categoriesRouter = express.Router();
const authMiddleware = require('../middlewares/auths');
const categoriesController = require('../controllers/categories');

const categoriesMiddleware = require('../middlewares/categories');

/**
 *@swagger
 *  {
 *    "components": {
 *      "schemas": {
 *        "Categories": {
 *          "type": "object",
 *          "properties": {
 *            "name": {
 *              "type": "string",
 *              "description": "The name of the category"
 *             },
 *            "image": {
 *              "type": "string",
 *              "description": "The image of the category"
 *            },
 *            "description": {
 *              "type": "string",
 *              "description": "The description of the category"
 *            }
 *          },
 *         "required": [ "name" ],
 *          "example": {
 *            "name": "Category 1",
 *            "image": "image url",
 *            "description": "This is the content of the category"
 *          }
 *       }
 *     }
 *   }
 *}
 */

/**
 * @swagger
 * "/categories": {
 *    "post": {
 *      "summary": "Create a new category",
 *      "tags": ["Categories"],
 *      "security":[{"token":[]}],
 *      "requestBody": {
 *        "required": true,
 *        "content": {
 *           "application/json": {
 *              "schema": {
 *                "type": "object",
 *                "$ref": "#/components/schemas/Categories"
 *                }
 *            }
 *         }
 *      },
 *      "responses": {
 *        "200": { "description": "category has been created" },
 *        "500": { "description": "Internal server error" }
 *      }
 *    }
 * }
 */

categoriesRouter.post(
  '/',
  authMiddleware.isAdmin,
  categoriesMiddleware.validateCategory,
  categoriesController.create
);

/**
 * @swagger
 * "/categories": {
 *    "get": {
 *      "summary": "list of all categories",
 *      "tags": ["Categories"],
 *      "responses": {
 *        "200":{"description":"succesful"},
 *        "content": {
 *            "application/json": {
 *              "schema": {
 *                "type": "object",
 *                "items": {
 *                  "$ref": "#/components/schemas/Categories"
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

categoriesRouter.get(
  '/',
  authMiddleware.isAdmin,
  categoriesController.getAllNames
);

/**
 * @swagger
 * "/categories/{id}": {
 *    "get": {
 *      "summary": "get a category by Id",
 *      "tags": ["Categories"],
 *      "security":[{"token":[]}],
 *      "parameters": [
 *               {
 *                 "name": "id",
 *                 "in": "path",
 *                 "description": "The id of the news",
 *                 "required": true,
 *                 "type": "integer",
 *                 "example" :1
 *               }
 *             ],
 *      "responses": {
 *        "200": { "description": "succesful" },
 *        "500": { "description": "Internal server error" }
 *      }
 *    }
 * }
 */

categoriesRouter.get(
  '/:id',
  authMiddleware.isAdmin,
  categoriesController.getById
);

/**
 * @swagger
 * "/categories/{id}": {
 *    "put": {
 *      "summary": "update a category by Id",
 *      "tags": ["Categories"],
 *      "security":[{"token":[]}],
 *      "parameters": [
 *               {
 *                 "name": "id",
 *                 "in": "path",
 *                 "description": "The id of the category",
 *                 "required": true,
 *                 "type": "integer",
 *                 "example" :1
 *               }
 *             ],
 *      "requestBody": {
 *        "required": true,
 *        "content": {
 *           "application/json": {
 *              "schema": {
 *                "type": "object",
 *                "$ref": "#/components/schemas/Categories"
 *                }
 *            }
 *         }
 *      },
 *      "responses": {
 *        "200": { "description": "Category has been updated" },
 *        "500": { "description": "Internal server error" }
 *      }
 *    }
 * }
 */

categoriesRouter.put(
  '/:id',
  authMiddleware.isAdmin,
  categoriesController.update
);

/**
 * @swagger
 * "/categories/{id}": {
 *    "delete": {
 *      "summary": "remove a category by Id",
 *      "tags": ["Categories"],
 *      "security":[{"token":[]}],
 *      "parameters": [
 *               {
 *                 "name": "id",
 *                 "in": "path",
 *                 "description": "The id of the category",
 *                 "required": true,
 *                 "type": "integer",
 *                 "example" :1
 *               }
 *             ],
 *      "responses": {
 *        "200": { "description": "Category has been deleted" },
 *        "500": { "description": "Internal server error" }
 *      }
 *    }
 * }
 */

categoriesRouter.delete(
  '/:id',
  authMiddleware.isAdmin,
  categoriesController.remove
);

module.exports = categoriesRouter;
