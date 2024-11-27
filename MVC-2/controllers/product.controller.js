const product = require("../models/product.model.js");

const createProduct = async (req, res) => {
    try {
        let product = await product.create(req.body);
        res.status(201).send(product);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

const getProduct = async (req, res) => {
    try {
        let product = await product.find();
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const getProductById = async (req, res) => {
    try {
        const { ProductId } = req.params;
        let product = await product.findById(ProductId)
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }                       
}

const updateProduct = async (req, res) => {
    try {
        const { ProductId } = req.params;
        let product = await product.findByIdAndUpdate(ProductId, req.body, { new: true });
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { ProductId } = req.params;
        let product = await product.findByIdAndDelete(ProductId);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}
module.exports = { createProduct, getProduct, getProductById, updateProduct, deleteProduct }