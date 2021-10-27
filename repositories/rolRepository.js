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
     await db.Role.create({
      name: name,
      description: description,
    });
  },
  update: async (name, description, id) => {
    await db.Role.update(
      {
        name: name,
        description: description,
      },
      { where: { id: id } }
    );
  },
  destroy: async (id)=>{
    await db.Role.destroy({ where: { id: id } });
  }
};
