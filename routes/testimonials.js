const express = require('express');
const testimonialsRouter = express.Router();
const testimonialsController = require('../controllers/testimonials');
const authMiddleware = require('../middlewares/auths');
const testimonialsMiddleware = require('../middlewares/testimonials.js');
const pagination = require('../middlewares/pagination');

/**
 *@swagger
 *  {
 *    "components": {
 *      "schemas": {
 *        "Testimonial": {
 *          "type": "object",
 *          "properties": {
 *            "name": {
 *              "type": "string",
 *              "description": "The name of the testimonial"
 *             },
 *            "image": {
 *              "type": "string",
 *              "description": "The url of the testimonial image"
 *            },
 *            "content": {
 *              "type": "string",
 *              "description": "The content of the testimonial"
 *            },
 *          },
 *         "required": [  "name", "content"],
 *          "example": {
 *            "name": "testimonial 1",
 *            "image": "www.testimonial1image.com/image1.png",
 *            "content": "This is the content of the testimonial.",
 *          }
 *       }
 *     }
 *   }
 *}
 */

/**
 * @swagger
 *{
 *    "/testimonials/{id}": {
 *       "delete": {
 *             "summary": "Delete a testimonial by id",
 *             "parameters": [
 *               {
 *                 "name": "id",
 *                 "in": "path",
 *                 "description": "The id of the testimonial",
 *                 "required": true,
 *                 "type": "integer"
 *              }
 *             ],
 *             "tags": [ "Testimonials" ],
 *             "security":[{"token":[]}],
 *             "responses": {
 *                 "200": {
 *                    "description": "The testimonial has been deleted"
 *                 },
 *                 "404": {
 *                   "description": "Testimonial not found"
 *                 },
 *                 "500": {
 *                   "description": "Internal server error"
 *                 }
 *              }
 *          }
 *      }
 *   }
 */
testimonialsRouter.delete(
  '/:id',
  authMiddleware.isAdmin,
  testimonialsController.remove
);

/**
 * @swagger
 *{
 *    "/testimonials/{id}": {
 *       "put": {
 *             "summary": "Update a testimonial by id",
 *             "parameters": [
 *               {
 *                 "name": "id",
 *                 "in": "path",
 *                 "description": "The id of the testimonial",
 *                 "required": true,
 *                 "type": "integer"
 *               }
 *             ],
 *       "requestBody": {
 *        "required": true,
 *        "content": {
 *           "application/json": {
 *              "schema": {
 *                "type": "object",
 *                "$ref": "#/components/schemas/Testimonial"
 *                }
 *            }
 *         }
 *      },
 *             "tags": [ "Testimonials" ],
 *             "security":[{"token":[]}],
 *             "responses": {
 *                 "200": {
 *                    "description": "The testimonial has been updated"
 *                 },
 *                 "404": {
 *                   "description": "Testimonial not found"
 *                 },
 *                 "500": {
 *                   "description": "Internal server error"
 *                 }
 *              }
 *          }
 *      }
 *   }
 */
testimonialsRouter.put(
  '/:id',
  authMiddleware.isAdmin,
  testimonialsController.update
);

/**
 * @swagger
 *{
 *    "/testimonials": {
 *       "post": {
 *             "summary": "Create a testimonial",
 *       "requestBody": {
 *        "required": true,
 *        "content": {
 *           "application/json": {
 *              "schema": {
 *                "type": "object",
 *                "$ref": "#/components/schemas/Testimonial"
 *                }
 *            }
 *         }
 *      },
 *             "tags": [ "Testimonials" ],
 *            "security":[{"token":[]}],
 *             "responses": {
 *                 "200": {
 *                    "description": "The testimonial has been created"
 *                 },
 *                 "500": {
 *                   "description": "Internal server error"
 *                 }
 *              }
 *          }
 *      }
 *   }
 */
testimonialsRouter.post(
  '/',
  authMiddleware.isAdmin,
  testimonialsMiddleware.validateTestimonial,
  testimonialsController.create
);

/**
 * @swagger
 *{
 *  "/testimonials": {
 *    "get": {
 *      "summary": "Get all Testimonials",
 *      "parameters": [
 *               {
 *                 "name": "page",
 *                 "in": "query",
 *                 "description": "Page number",
 *                 "type": "integer"
 *               }
 *             ],
 *      "tags": [ "Testimonials" ],
 *      "security":[{"token":[]}],
 *      "responses": {
 *        "200": {"description": "All Testimonials listed"}
 *      }
 *    }
 *  }
 *}
 */
testimonialsRouter.get(
  '/',
  authMiddleware.isAdmin,
  pagination.validate,
  testimonialsController.getAll
);

module.exports = testimonialsRouter;
