const membersService = require('../services/members');

const remove = async (req, res, next) => {
	try {
		const response = await membersService.remove(req.params.id);
		return res.status(200).json(response);
	} catch (error) {
		next(error);
	}
};

/* const getAll = async (req, res, next) => {
     try {
         const response = await membersService.getAll();
        res.send(response);
     } catch (error) {
         next(error);
     }
 }

 */
module.exports = {
	// getAllMembers(),
	remove
};
