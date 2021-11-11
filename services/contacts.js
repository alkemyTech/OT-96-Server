const contactsRepository = require('../repositories/contacts');

//  Example:
const getAll = async (req, res, next) => {
  const response = await contactsRepository.getAll();
  if (response.length == 0) {
    const error = new Error(`No hay contactos!.`);
    error.status = 404;
  }
  return response;
};
const create = async ({ name, phone, email, message }) => {
  const response = await contactsRepository.create({
    name,
    phone,
    email,
    message
  });
  if (!response) {
    const error = new Error('there was an error in creation of contact');
    error.status = 403;
    throw error;
  }
  return response;
};

module.exports = { create, getAll };
