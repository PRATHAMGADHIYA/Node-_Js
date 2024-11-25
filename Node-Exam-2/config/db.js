const mongoose = require('mongoose');

const dbConnection = async () => {
    await mongoose.connect("mongodb+srv://prathamgadhiya:node@node.84vwh.mongodb.net/?retryWrites=true&w=majority&appName=Node")
    console.log("Connected to MongoDB server");
}

module.exports = dbConnection