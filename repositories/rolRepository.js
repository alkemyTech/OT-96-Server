const db = require("../models/");

module.exports = {
  getAll: async () => {
    let roles = await db.Role.findAll();

    return roles;
  },
  getById: async (id) => {
    let one = await db.Role.findByPk(id, {
      include: [{ association: "users" }],
    });

    return one;
  },
  getByName: async (name) => {
    let rol = await db.Role.findOne({ where: { name: name } });

    return rol;
  },
  create: async (name, description) => {
    return await db.Role.create({
      name: name,
      description: description,
    });
  },
};
