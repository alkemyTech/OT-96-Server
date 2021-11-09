const awsServices = require('../services/aws_s3');

const create = async (file) => {
  try {
    if (!file) {
      const error = new Error(`el archivo no existe`);
      error.status = 404;
      throw error;
    }
    const response = await awsServices.uploadFile(file);
    return response.Bucket;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create
};
