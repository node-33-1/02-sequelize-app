const express = require('express');
const router = express.Router();
const productRouter = require('./product.router');
const carRouter = require('./car.router');

// colocar las rutas aquí
router.use(productRouter);
router.use(carRouter);

module.exports = router;
