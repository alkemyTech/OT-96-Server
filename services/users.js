const bcrypt = require('bcryptjs');
const usersRepository = require('../repositories/users');

const sendWelcomeEmail = require('../services/sendWelcomeEmail');

const existEmailUser = async (email) => {
  const user = await usersRepository.getByEmail(email);
  return user;
};

const getAll = async () => {
  const users = await usersRepository.getAll();
  if (users.length > 0) {
    return users;
  }
  const error = new Error('No existen usuarios!');
  error.status = 404;
  throw error;
};

const getById = async (id) => {
  return await usersRepository.getById(id);
};

const create = async (userData) => {
  let existingUser = await usersRepository.getByEmail(userData.email);
  if (existingUser) {
    const error = new Error('el mail ya existe');
    error.status = 404;
    throw error;
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);

  const newUser = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    password: hashedPassword,
    email: userData.email,
    photo: userData.photo,
    roleId: userData.roleID
  };

  const usersCreated = await usersRepository.create(newUser);

  // if user create is ok, send welcome email
  const organizationId = 1; // <- harcoded, maybe check this on future
  await sendWelcomeEmail.send(userData.email, organizationId);

  return usersCreated;
};

const update = async (id, data) => {
  const user = usersRepository.getById(id);
  if (!user) {
    const error = new Error('El usuario no existe!.');
    error.status = 404;
    throw error;
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(data.password, salt);

  const userUpdated = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashedPassword,
    roleId: data.roleId,
    photo: data.photo
  };
  await usersRepository.update(id, userUpdated);

  return await usersRepository.getById(id);
};

const remove = async (id) => {
  const user = await usersRepository.getById(id);
  if (user) {
    const error = new Error('El usuario no existe!.');
    error.status = 404;
    throw error;
  }
  await usersRepository.remove(id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  existEmailUser
};
