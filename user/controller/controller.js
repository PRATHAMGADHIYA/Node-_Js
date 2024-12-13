const User = require("../model/model");

const createUser=async(req,res)=>{
    try {
        const {email}=req.body;
        let isExits =await User.findOne({email});
        if(isExits){
            return res.send("user already exists");
        }
        else{
            let user = await User.create(req.body)
            return res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({error:error});
    }
}

const getUser=async(req,res)=>{
   try {
     let user = await User.findOne();
     res.status(200).json(user);
   } catch (error) {
    res.status(500).json({error:error});
   }
};

const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    let isExits=await User.findOne({email:email})
    if(!isExits){
        return res.send("user not found");
    }
    if(isExits.password!=password){
        return res.send("invalid password")
    }
    return res.send("logged in")
}

const getloginPage=(req,res)=>{
    res.render("login")
}

const getSignupPage=(req,res)=>{
    res.render("signup")
}

module.exports ={createUser,getUser,getloginPage,getSignupPage,loginUser}