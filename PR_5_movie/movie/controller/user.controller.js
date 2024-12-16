const User = require("../model/user.schema")

const signupPage=async(req,res)=>{
    try {
        const user= await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({error: error});
    }
}
const loginPage=async(req,res)=>{
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

const getallUsers = async(req, res)=>{
    try {
        const users=await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

const deleteuser=async(req, res)=>{
    try {
        const {userid}=req.params;
        const user=await User.findByIdAndDelete(userid);
        if(!user){
            return res.status(404).json({error: "User not found"})
        }
        res.status(200).json({message:"User deleted successfully"})
    } catch (error) {
        res.status(500).json({error: error});
    }
};

module.exports={signupPage,loginPage,getallUsers,deleteuser};