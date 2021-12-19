const express = require('express');
const upload = require('../middleware/upload');

const produkRouter = express();

const produkController = require('../controllers/controller.produk');

produkRouter.get('/', produkController.listProduct);
produkRouter.post('/detailproduk', produkController.findById);
produkRouter.delete('/delete', produkController.delete);
produkRouter.post('/create', upload.single('ImageProduk'), produkController.create);

module.exports = produkRouter;
