const validate = (req, res, next) => {
  page = Number(req.query.page);
  if (isNaN(page)) {
    const error = new Error('Parameter "page" must be a number!');
    error.status = 400;
    throw error;
  }
  if (page < 1) {
    const error = new Error('Parameter "page" out of range');
    error.status = 400;
    throw error;
  }
  next();
};

module.exports = {
  validate
};
