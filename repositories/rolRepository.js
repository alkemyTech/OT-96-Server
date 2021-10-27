const db = require("../models/");

module.exports = {
  getAll: async (req, res) => {
   let roles = await db.Role.findAll()

    return roles
  },
};
