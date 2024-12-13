const express=require("express")
const path=require("path")
const Cookies=require("cookie-parser")
const db=require("./config/db")
const UserRouter=require("./routes/route")
const isLogin=require("./middleware/login")
const app=express()
app.use(express.json());
app.use(Cookies());
app.use(express.urlencoded({ extended: true }));


//ejs

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


app.get("/user",isLogin,(req,res)=>{
    let {username,email} = req.cookies;
    res.render("index",{username,email})
});

app.use("/user",UserRouter)


app.listen(8000,()=>{
    console.log("listening on http://localhost:8000");
    db();
})