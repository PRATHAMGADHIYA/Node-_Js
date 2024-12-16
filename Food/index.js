const express = require("express")
const db = require("./config/db")
const Cookies = require("cookie-parser")
const app = express();
app.use(Cookies());

app.use(express.json());

app.get("/",(req,res)=>{
    console.log("welcome the api");
    
})
app.listen(8090, () => {
    console.log("Server started at http://localhost:8090");
    db();
})