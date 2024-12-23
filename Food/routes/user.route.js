const {Router}=require("express");
const { signupuser, getalluser } = require("../controller/user.controller");

const userRouter=Router();

userRouter.get("/login",loginuser);
userRouter.get("/signup",signupuser);
userRouter.get("/",getalluser);

module.exports=userRouter;