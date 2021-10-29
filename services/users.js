const bcrypt = require('bcryptjs');
const usersRepository = require('../repositories/users');

const existEmailUser = async () => {
  const user = await usersRepository.getByEmail(email)
  return user
}

const getAll = async () => {
  return await usersRepository.getAll();
};

const getById = async (id) => {
  return await usersRepository.getById(id);
};

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

const update = async (id, data) => {
  return await usersRepository.update(id, data);
};

const remove = async (id) => {
  return await usersRepository.remove(id);
};

module.exports = {

  getAll,
  getById,
  create,
  update,
  remove,
  existEmailUser
};


}

