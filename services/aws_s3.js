const fs = require('fs');

const AWS = require('aws-sdk');

AWS.config.update({ region: process.env.AWS_REGION });
const bucketName = process.env.AWS_BUCKET

// Create S3 instance
const s3 = new AWS.S3();


/** Upload file **************/
const uploadFile = (file) => {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }

    return s3.upload(uploadParams).promise();
}

/** Download file **************/
const getFileStream = (key) => {
    const downloadParams = {
        Key: key,
        Bucket: bucketName
    }

    return s3.getObject(downloadParams).createReadStream();
}

module.exports = {
    uploadFile,
    getFileStream
}