const express = require("express");
const path = require("path");
const dbConnection = require("./config/db");
const userRoute = require("./routes/user.route");
const Cookies = require("cookie-parser");
const { isLogin } = require("./middleware/isLogin");
const productRoute = require("./routes/product.route");
require("dotenv").config();
const app = express();
app.use(Cookies());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));



app.get("/", isLogin, (req, res) => {
    let { username } = req.cookies;
    res.render("index", { username });
});


app.use("/user", userRoute)
app.use("/products", productRoute)


app.get("/user-data", (req, res) => {
    res.send(req.user);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
    dbConnection();
})