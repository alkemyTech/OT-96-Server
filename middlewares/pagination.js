const validate = (req, res, next) => {
  if (req.query.page == 0) {
    const error = new Error("Page 0 does not exist");
    error.status = 404;
    throw error;
  }
  next();
};

module.exports = {validate}
