let user = require("../model/user.model");

const getuser = async (req,res) =>{
    let data=await user.find();
    res.send(data);
}

const postuser = async (req,res) =>{
    let {email,username,password}=req.body;
    let isexist=await user.findOne({email});
    if(isexist){
        return res.send({msg:"already exist"});

    }
    else{
        let data=await user.create(req.body);
        res.send(data);
    }
};

const login = async (req,res) =>{
    let{email,password}=req.body;

    let isexist=await user.findOne({email});
    if(!isexist){
        return res.send({msg:"user not found"});
    }
    if(isexist.password != password){
        return res.send({msg:"password incorrect"});

    }
    res.send({msg:"login successful"});
};

module.exports ={getuser,postuser,login}