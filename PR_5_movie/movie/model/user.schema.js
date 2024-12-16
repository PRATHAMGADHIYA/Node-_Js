const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    usrname:String,
    email:String,
    password:String,
});

const User=mongoose.model("User",userSchema);

module.exports=User;