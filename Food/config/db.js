const mongoose=require("mongoose");

const db=async()=>{
    await mongoose.connect("mongodb://localhost:27017/Food");
    console.log("connected to database");
}
module.exports=db;