const contactsRepository = require('../repositories/contacts');

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

module.exports = { create };
