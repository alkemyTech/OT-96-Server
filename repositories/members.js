const db = require('../models');

const remove = async (id) => {
	const respose = await db.Members.destroy({
		where: {
			id
		}
	});
	return respose;
};

module.exports = {
	// create,
	// update,
	remove
};
