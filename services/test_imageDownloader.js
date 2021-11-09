const awsServices = require('./aws_s3');

const download = (key) => {
  return awsServices.downloadFile(key); // <- devuelve un readStream
};

module.exports = {
  download
};
