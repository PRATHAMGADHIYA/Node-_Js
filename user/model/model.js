const mongoose=require("mongoose");

const UserSchema= new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    img:String,
});

const User=mongoose.model("User",UserSchema);

module.exports = User;