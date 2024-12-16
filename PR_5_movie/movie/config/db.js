const mongoose=require("mongoose");

const db=async()=>{
    await mongoose.connect("mongodb://localhost:27017/Moive")
    console.log("Connected to database");
}

module.exports=db;