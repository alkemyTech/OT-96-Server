const imageUploadService = require('../services/imageUploader');
const imageDownloadService = require('../services/test_imageDownloader');

const fs = require('fs'); //<- para interactuar con filesystem
const util = require('util');
const unlinkFile = util.promisify(fs.unlink); //<- eliminar archivos

const upload = async (req, res, next) => {
  try {
    const file = req.file; //<- archivo
    //const body = req.body; //<- body normal

    response = await imageUploadService.upload(file);

    await unlinkFile(file.path); //<- borra el archivo temporal de /temp
    res.send(response);
  } catch (error) {
    next(error);
  }
};

const download = async (req, res, next) => {
  const key = req.params.key;

  const readStream = imageDownloadService.download(key);
  console.log(readStream);

  readStream.pipe(res);
};

module.exports = {
  upload,
  download
};
