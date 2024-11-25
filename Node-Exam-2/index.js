const express = require('express');
const dbConnection = require("./config/db")
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("welcome")
})
app.listen(5050,()=>{
    console.log("listening on https://localhost:5050");
    dbConnection();
    
})