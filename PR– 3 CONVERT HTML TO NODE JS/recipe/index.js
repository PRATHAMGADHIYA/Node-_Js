const express=require('express');
const path=require('path');
const app=express();


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.get("/",(req,res)=>{
    res.send("Welcome to the Recipe API.")
})
app.listen(8090,()=>{
    console.log("listening on port http://localhost:8090");
    
})