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
};
