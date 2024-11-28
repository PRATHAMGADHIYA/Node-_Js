const express = require('express')
const dbconnection = require('./config/db.js');
const productRoute = require("./routes/product.routes.js")
const path=require("path");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express()
app.use(express.urlencoded({extended:true}));

app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"view/form.html"));
})
app.use("/products", productRoute);


app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
    dbconnection();
})