const { default: mongoose } = require('mongoose');

const productschema = new mongoose.Schema({
    title: String,
    price: Number,
    image: String,
    userId: String
});

const Product = mongoose.model('Product', productschema);
module.exports = Product;