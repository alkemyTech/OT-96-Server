const db = require("../models");

module.exports = {
  getAll: async (req, res) => {
    try {
      let all = await db.Role.findAll();
      if (data.length == 0) {
        return res.status(404).json({
          status: 404,
          msg: `No existe el rol con ID: ${req.params.id}`,
        });
      }
      return res
        .status(200)
        .json({ status: 200, length: all.length, data: all });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ status: 500, msg: error });
    }
  },
  getById: async (req, res) => {
    try {
      let one = await db.Role.findByPk(req.params.id, {
        include: [{ association: "users" }],
      });

      if (!one) {
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
  },

  create: async (req, res) => {
    try {
      const { name, description } = req.body;
      let rol = await db.Role.findOne({ where: { name: name } });

      if (!rol) {
        await db.Role.create({
          name: name,
          description: description,
        });

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
  },
  update: async (req, res) => {
    try {
      let rol = await db.Role.findByPk(req.params.id);

      const { name, description } = req.body;

      let rolExist = await db.Role.findOne({ where: { name: name } });

      if (rol) {
        if (!rolExist) {
          db.Role.update(
            {
              name: name,
              description: description,
            },
            { where: { id: req.params.id } }
          );
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
  },
  delete: async (req, res) => {
    try {
      let rol = await db.Role.findByPk(req.params.id);
 
      if (rol) {
        await db.Role.destroy({ where: { id: rol.id } });

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
  },
};
