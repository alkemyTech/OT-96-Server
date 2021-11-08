const bcrypt = require('bcryptjs');
const usersRepository = require('../repositories/users');

const { sendWelcomeEmail } = require('../helpers/sendWelcomeEmail');

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
  await sendWelcomeEmail(userData.email, organizationId);

  return usersCreated;
};

const update = async (id, data) => {
  try {
    const user = usersRepository.getById(id);
    if (user) {
      return await usersRepository.update(id, data);
    }
    const error = new Error('El usuario no existe!.');
    error.status = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};

const remove = async (id) => {
  try {
    const user = await usersRepository.getById(id);
    if (user) {
      await usersRepository.remove(id);
    }
    const error = new Error('El usuario no existe!.');
    error.status = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  existEmailUser
};
