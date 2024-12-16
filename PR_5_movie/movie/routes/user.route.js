const {Router}=require("express");
const { signupPage, loginPage, getallUsers, deleteuser } = require("../controller/user.controller");


const userRoute=Router();

userRoute.post("/signup",signupPage)
userRoute.post("/login",loginPage)
userRoute.get("/",getallUsers)
userRoute.delete("/delete/:id",deleteuser);

module.exports=userRoute;