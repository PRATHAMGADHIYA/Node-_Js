const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    img: String,
    price: Number,
    ratings: [{ username: String, Count: Number }],
});

const product = mongoose.model("product", productSchema);
module.exports = product;