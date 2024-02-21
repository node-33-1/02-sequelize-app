const catchError = require('../utils/catchError');
const Product = require('../models/Product');

const getAll = catchError(async(req, res) => {
    const products = await Product.findAll();
    return res.json(products);
});

module.exports = {
    getAll
}