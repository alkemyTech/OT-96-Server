const awssService = require('../services/aws_s3');

const create = async (req, res, next) => {
  try {
    const response = await awssService.uploadFile(req.files.image);
    console.log(response);
    return res.status(200).json(response.Bucket);
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
