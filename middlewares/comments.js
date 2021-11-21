const { check, validationResult } = require('express-validator');
const db = require('../models');
const usersService = require('../services/users');

const errorHandler = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
	next();
};

const validateComments = [
	check('newsId')
		.notEmpty()
		.withMessage('You need to enter a newsID!')
		.bail()
		.isNumeric()
		.withMessage('Invalid newsId')
		.bail(),
	check('userId')
		.notEmpty()
		.withMessage('You need to enter a userId!')
		.bail()
		.isNumeric()
		.withMessage('Invalid userId')
		.bail(),
	check('body').notEmpty().withMessage('You need to enter a body!').bail(),

	errorHandler
];

const isAdminComment = async (req, res, next) => {
	try {
		const id = req;
		const response = await db.Comments.findByPk(id);
		if (!response) {
			const error = new Error('no comment found');
			error.status = 404;
			throw error;
		}
		const commentId = response.id;
		const userValidate = await usersService.getById(commentId);
		if (!userValidate) {
			const error = new Error('user not validate');
			error.status = 404;
			throw error;
		}
		next();
	} catch (error) {
		next(error);
	}
};

module.exports = { validateComments };
