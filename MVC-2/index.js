const express = require('express')
const dbconnection = require('./config/db');
const productRoute = require("./routes/product.routes.js")
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const app = express()


app.use(express.json())
app.get("/", (req, res) => {
    res.send("Welcome to the server");
})
app.use("/Product", productRoute)


app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
    dbconnection();
})