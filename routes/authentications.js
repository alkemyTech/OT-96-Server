const express = require('express');
const authRouter = express.Router();
const authenticationsController = require('../controllers/authentications');
const usersController = require('../controllers/users.js');
const usersMiddleware = require('../middlewares/users');
const authMiddleware = require('../middlewares/auths');

/**
 * @swagger
 * {
 *    "components":{
 *        "schemas":{
 *           "User": {
 *            "type": "object",
 *            "properties":{
 *              "firstName":{
 *                "type": "string",
 *                "description":"Name of User"
 *               },
 *              "lastName":{
 *                "type": "string",
 *                "description":"lastName of User"
 *               },
 *              "email":{
 *                "type": "string",
 *                "description": "Email of user"
 *               },
 *              "password":{
 *                "type": "string",
 *                "description": "Password of user"
 *               },
 *               "photo":{
 *                "type": "string",
 *                "description": "Photo of user"
 *               },
 *                "roleId":{
 *                  "type": "integer",
 *                  "description": "Role of user"
 *                },
 *             },
 *            "example":{
 *              "firstName":"Alexis",
 *              "lastName":"Zacre",
 *              "email":"alexis10893123@gmail.com",
 *              "password": "Hola123!"
 *             }
 *           }
 *         }
 *     }
 * }
 */
/**
 * @swagger
 * "/auth/login": {
 *    "post": {
 *      "summary": "Login a user",
 *      "tags": ["User"],
 *      "requestBody": {
 *        "content": {
 *           "application/json": {
 *              "schema": {
 *                "type": "object",
 *                "example":{
 *                  "email":"alexis10893123@gmail.com",
 *                  "password": "Hola123!"
 *                  }
 *                }
 *            }
 *         }
 *      },
 *      "responses": {
 *      "200":{"description":"User Loged"},
 *      "400":{"description":"User does't exist"},
 *      "422":{"description":"Validations"},
 *      "500":{"description":"Internal Server Error"}
 *      }
 *    }
 * }
 */
authRouter.post(
  '/login',
  usersMiddleware.validateLogin,
  authenticationsController.login
);

/**
 * @swagger
 * "/auth/register": {
 *    "post": {
 *      "summary": "Create a new User",
 *      "tags": ["User"],
 *      "requestBody": {
 *        "required": true,
 *        "content": {
 *           "application/json": {
 *              "schema": {
 *                "type": "object",
 *                "$ref": "#/components/schemas/User"
 *                }
 *            }
 *         }
 *      },
 *      "responses": {
 *      "200":{"description":"User Created"},
 *      "404":{"description":"User already exists"},
 *      "422":{"description":"Validations"},
 *      "500":{"description":"Internal Server Error"}
 *      }
 *    }
 * }
 */
authRouter.post(
  '/register',
  usersMiddleware.validateUser,
  usersController.create
);
/**
 * @swagger
 * "/auth/me": {
 *    "get": {
 *    "summary": "Data of user Loged",
 *    "tags": ["User"],
 *    "responses": {
 *     "200":{"description":"My Data"},
 *     "content": {
 *       "application/json": {
 *         "schema": {
 *          "type": "object",
 *          "items": {
 *            "$ref": "#/components/schemas/User"
 *              }
 *            }
 *          }
 *      },
 *     "404":{"description":"User not found"},
 *     "500":{"description":"Internal Server Error"}
 *     },
 *     "security":[{"token":[]}]
 *    }
 * }
 */

authRouter.get(
  '/me',
  authMiddleware.isLoggedUser,
  authenticationsController.myData
);

module.exports = authRouter;
