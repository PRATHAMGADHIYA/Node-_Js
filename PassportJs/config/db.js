const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.DB_URL;
const db = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/PassportJs");
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};


module.exports =db