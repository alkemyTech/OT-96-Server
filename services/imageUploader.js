const awsServices = require('./aws_s3');

const upload = async (file) => {
  const result = await awsServices.uploadFile(file);

  const response = {
    imageUrl: result.Location,
    imageKey: result.Key
  };

  return response;
};

module.exports = {
  upload
};
