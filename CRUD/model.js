const mongoose=require('mongoose');

const studentschema=new mongoose.Schema({
    name:String,
    age:Number,
    course:String,
    fees:Number,
});

const student=mongoose.model("student",studentschema)

module.exports=student;