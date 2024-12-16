const User = require("../models/user.model")

const signupuser=async(req,res)=>{
   try {
     const user=await User.create(req.body);
     res.status(201).json(user);
   } catch (error) {
    res.status(500).json(error);
   }
}
const loginuser=async(req,res)=>{
    try {
        const {username,password}=req.body;
        const user=await User.findOne({username,password});
        if(!user){
            return res.status(401).json({error: "Invalid username or password"});
        }
        res.status(200).json({message:"login success"})
        
    } catch (error) {
        res.status(500).json(error);
    }
}
const getalluser=async(req,res)=>{
    try {
     const user=await User.findOne();
     res.status(200).json(user);
   } catch (error) {
    res.status(500).json(error);
   }
}

module.exports={signupuser,loginuser,getalluser};