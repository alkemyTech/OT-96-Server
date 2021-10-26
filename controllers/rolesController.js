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
      let rol = await db.Role.findOne({ where: { name: req.body.name } });
      if (!rol) {
        await db.Role.create({
          name: req.body.name,
          description: req.body.description,
        });

        return res.status(201).json({ status: 201, msg: "Rol creado" });
      }

      return res.status(401).json({
        status: 404,
        msg: `El rol con nombre: ${req.body.name}. ya existe!`,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ status: 500, msg: error });
    }
  },
};
