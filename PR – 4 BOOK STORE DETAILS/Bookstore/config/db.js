const mongoose =require("mongoose")

const dbconnect = async()=>{
    await mongoose.connect("mongodb://localhost:27017/bookstore")
    console.log("Connected to database");
}
module.exports=dbconnect;