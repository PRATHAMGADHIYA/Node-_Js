const mongoose = require('mongoose');

const DB=async()=>{
    await mongoose.connect("mongodb://localhost:27017")
}
module.exports=DB
