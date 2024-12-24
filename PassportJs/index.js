const express = require("express");
const path = require("path");
const connection = require("./config/db");
const userRouter = require("./routes/user.route");
const Cookies = require("cookie-parser");
const { isLoggedIn } = require("./middleware/login");
const session = require('express-session');
const passport = require("passport");
const init = require("./middleware/passAuth");
require("dotenv").config();
const app = express();
app.use(Cookies());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({ secret: "secret-key", resave: false, saveUninitialized: true }));


app.use(passport.initialize());
app.use(passport.session());

init(passport);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", isLoggedIn, (req, res) => {
  res.render("index");
});
app.use("/user", userRouter);

app.listen(8090, () => {
  console.log("listening on port on http://localhost:8090");
  connection();
});