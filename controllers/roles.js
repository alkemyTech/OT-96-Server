const rolesService = require("../services/rolesServices");

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
    console.log(error);
    next(error);
  }
};

const getById = async (req, res) => {
  try {
    let one = await rolesService.getById(req.params.id);
    if (one == null) {
      const error = new Error(`No exite el rol con id ${req.params.id}`);
      error.status = 404;
      throw error;
    }
    return res.status(200).json({ status: 200, data: one });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    let rol = await rolesService.getByName(name);

    if (!rol) {
      await rolesService.create(req.body);

      return res.status(201).json({ status: 201, msg: "Rol creado" });
    }

    const error = new Error(`El rol con nombre: ${name} ya existe!`);
    error.status = 409;
    throw error;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    let rol = await rolesService.getById(req.params.id);

    let rolExist = await rolesService.getByName(req.body.name);

    if (rol) {
      if (!rolExist) {
        rolesService.update(req.body, req.params.id);

        return res.status(201).json({ status: 201, msg: "Rol actualizado!" });
      }
      const error = new Error(`El rol con nombre: ${req.body.name} ya existe!`);
      error.status = 409;
      throw error;
    }

    const error = new Error(
      `No se ha encontrado el rol con ID: ${req.params.id}`
    );
    error.status = 404;
    throw error;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const rol = await rolesService.getById(req.params.id);

    if (rol == null) {
      const error = new Error(`No existe el rol con ID: ${req.params.id}!`);
      error.status = 404;
      throw error;
    }
    await rolesService.remove(req.params.id);

    res.status(201).json({ status: 201, msg: "Rol eliminado!" });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getById, create, update, remove };

/* module.exports = {
  
  

  
 
  
}; */
