const rolesService = require('../services/rolesServices');

const getAll = async (req, res, next) => {
  try {
    let all = await rolesService.getAll();

    if (all.length == 0) {
      const error = new Error(`No existen roles`);
      error.status = 404;
      throw error;
    }
    return res.status(200).json({ status: 200, length: all.length, data: all });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    let one = await rolesService.getById(req.params.id);
    if (one == null) {
      const error = new Error(`No exite el rol con id ${req.params.id}`);
      error.status = 404;
      throw error;
    }
    return res.status(200).json({ status: 200, data: one });
  } catch (error) {
    next(error);
  }
};

<<<<<<< HEAD


module.exports = { getAll, getById};

/* module.exports = {
  
  

  
 
  
}; */
=======
module.exports = { getAll, getById };
>>>>>>> e396123f29b39c352f71dc2c2beb2d6be096c0d0
