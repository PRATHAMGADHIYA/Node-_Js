const isLogin=(req,res,next)=>{
    let {username,userId}=req.cookies
    if(userId,username){
        next()
    }
    else{
        res.redirect('/user/login')
    }
}

module.exports=isLogin