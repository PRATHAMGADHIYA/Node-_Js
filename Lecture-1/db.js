const mongoose = require('mongoose');

const dbconnect=async()=>{
    await mongoose.connect("mongodb+srv://prathamgadhiya:node@cluster0.u0k5y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    console.log("connected");
    
}
module.exports = dbconnect;