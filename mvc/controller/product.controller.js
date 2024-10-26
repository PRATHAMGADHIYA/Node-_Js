const Product = require("../model/product.model");

const createProduct = async (req, res) => {
    let data = await Product.create(req.body);
    res.send(data);
}

const getProducts = async (req, res) => {
    let data = await Product.find();
    res.send(data);
}

const getProductsWithId = async (req, res) => {
    let { id } = req.params;
    let data = await Product.find(id);
    res.send(data);
}

module.exports = { createProduct, getProducts, getProductsWithId }