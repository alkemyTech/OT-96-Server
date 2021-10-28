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
    console.log(one);
    if (one == null) {
      return res.status(404).json({
        status: 404,
        msg: `No existe el rol con ID: ${req.params.id}`,
      });
    }
    return res.status(200).json({ status: 200, data: one });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, msg: error });
  }
};

const create = async (req, res) => {
  try {
    const { name } = req.body;
    let rol = await rolesService.getByName(name);

    if (!rol) {
      await rolesService.create(req.body);

      return res.status(201).json({ status: 201, msg: "Rol creado" });
    }

    return res.status(401).json({
      status: 404,
      msg: `El rol con nombre: ${name}. ya existe!`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, msg: error });
  }
};

const update = async (req, res) => {
  try {
    let rol = await rolesService.getById(req.params.id);

    let rolExist = await rolesService.getByName(req.body.name);

    if (rol) {
      if (!rolExist) {
        rolesService.update(req.body, req.params.id);

        return res.status(201).json({ status: 201, msg: "Rol actualizado!" });
      }
      return res.status(401).json({
        status: 401,
        msg: `El rol con nombre: ${name}. Ya existe!.`,
      });
    }

    return res.status(401).json({
      status: 401,
      msg: `No se ha encontrado el rol con ID: ${req.params.id}`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, msg: error });
  }
};

const remove = async (req, res) => {
  try {
    let rol = rolesService.getById(req.params.id);

    if (rol) {
      await rolesService.remove(req.params.id);

      res.status(201).json({ status: 201, msg: "Rol eliminado!" });
    }
    res.status(401).json({
      status: 401,
      msg: `No existe el Rol con ID: ${req.params.id}`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, msg: error });
  }
};

module.exports = { getAll, getById, create, update, remove };

/* module.exports = {
  
  

  
 
  
}; */
