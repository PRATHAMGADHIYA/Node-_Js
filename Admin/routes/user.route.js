const{Router}=require("express");
const { 
    getLoginPage,
    getSignupPage,
    getUser, 
    getUserById,
    createUser, 
    Login, 
    updateUser, 
    deleteUser } = require("../controller/user.controller");

const userRouter=Router();
userRouter.get("/login",getLoginPage)
userRouter.get("/signup",getSignupPage)

userRouter.get("/",getUser)
userRouter.get("/:userId",getUserById)
userRouter.post("/",createUser)
userRouter.post("/Login",Login)
userRouter.patch("/:userId",updateUser)
userRouter.delete("/:userId",deleteUser)

module.exports=userRouter;


