const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const {getProduct, getProducts, addProduct, updateProduct, deleteProduct} = require('../controller/products.controller.js');
const multer = require('multer');

const upload = multer();

router.get('/', getProducts);

router.get('/:id', getProduct);

router.post('/', upload.none(), addProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router