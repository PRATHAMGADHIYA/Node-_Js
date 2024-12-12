const express=require("express");
const dbconnect=require("./config/db");
const booksRouter = require("./routes/route.js");
const app=express();

app.use(express.json());

app.use("/books",booksRouter)

app.get("/",(req,res)=>{
    res.send("welcome to the book store")
})




app.listen(8080,()=>{
    console.log("Server started at http://localhost:8090");
    dbconnect();
});