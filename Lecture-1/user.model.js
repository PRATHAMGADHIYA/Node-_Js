const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})
const users=mongoose.model('user',userschema);
module.exports = users;