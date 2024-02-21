const { getAll } = require('../controllers/product.controllers');
const express = require('express');

const productRouter = express.Router();

productRouter.route("/products")
		.get(getAll)

module.exports = productRouter;
