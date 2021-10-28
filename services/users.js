const bcrypt = require('bcryptjs');

const usersRepository = require('../repositories/users');

//register user
async function create(userData) {
  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);

  //create user
  const newUser = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    password: hashedPassword,
    email: userData.email,
    photo: userData.photo,
    roleId: userData.roleID,
  };

  return await usersRepository.create(newUser);
}

module.exports = { create };
