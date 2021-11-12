const fs = require('fs');
const AWS = require('aws-sdk');

// AWS account data
const bucketName = process.env.AWS_BUCKET;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const sercetAccesKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;

// Create S3 instance
const s3 = new AWS.S3({
  region,
  accessKeyId,
  sercetAccesKey
});

const uploadFile = (file, text) => {
  // const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: file,
    Key: text
  };

  return s3.upload(uploadParams).promise();
};

const downloadFile = (key) => {
  const downloadParams = {
    Key: key,
    Bucket: bucketName
  };

  return s3.getObject(downloadParams).createReadStream();
};

module.exports = {
  uploadFile,
  downloadFile
};
