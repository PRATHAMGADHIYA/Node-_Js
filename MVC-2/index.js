const express = require('express')
const dbconnection = require('./config/db.js');
const productRoute = require("./routes/product.routes.js")
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express()


app.use(express.json())

app.get("/", (req, res) => {
    res.send("welcome to the server");
})
app.use("/products", productRoute);


app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
    dbconnection();
})