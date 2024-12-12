const mongoose =require("mongoose");
require("dotenv").config();
const url=process.env.DB_URL;

const dbConnection=async()=>{
  try {
      await mongoose.connect(url);
      console.log("connect to database");
  } catch (error) {
    console.log(error);
  }
}

module.exports = dbConnection;