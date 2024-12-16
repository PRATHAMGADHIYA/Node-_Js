const express = require("express")
const db=require("./config/db");
const userRoute = require("./routes/user.route");
const movieRouter = require("./routes/movie.route");

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/",(req,res)=>{
    res.send("Welcome to the movie API")
})

app.use("/user",userRoute)
app.use("/movie",movieRouter)
app.listen(8070,()=>{
    console.log("Server started on port 8090")
    db();
})