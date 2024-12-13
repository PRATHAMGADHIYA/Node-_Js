const {Router}=require("express");
const { getloginPage, getSignupPage, getUser, createUser, loginUser } = require("../controller/controller");

const UserRouter=Router();

UserRouter.get("/login",getloginPage)
UserRouter.get("/signup",getSignupPage)

UserRouter.get("/",getUser)
UserRouter.post("/",createUser)
UserRouter.post("/",loginUser)

module.exports=UserRouter;