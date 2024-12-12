const express=require("express");
const path=require("path");
const dbConnection=require("./config/db")
const userRoute=require("./routes/user.route")
require("dotenv").config();
const app= express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("index")
})
app.use("/user",userRoute)


const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running on https://localhost:${PORT}`);
    dbConnection();
})