const express = require('express');
const imagesTestRouter = express.Router();
const test_imagesController = require('../controllers/test_images');

const multer = require('multer'); //<- Libreria middleware para manejo de subida de archivos: https://www.npmjs.com/package/multer
const upload = multer({ dest: 'temp/' }); //<- carpeta para guardar temporalmente el archivo

const authMiddleware = require('../middlewares/auths');

imagesTestRouter.post(
  '/images',
  authMiddleware.isAdmin,
  upload.single('image'),
  test_imagesController.upload
);

imagesTestRouter.get('/images/:key', test_imagesController.download);

module.exports = imagesTestRouter;
