const awsServices = require('./aws_s3');

const upload = async (file, text) => {
  const result = await awsServices.uploadFile(file, text);

  const response = {
    url: result.Location,
    key: result.Key
  };

  return response;
};

module.exports = {
  upload
};
