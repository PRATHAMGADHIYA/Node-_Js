const express=require("express")
const path=require("path")
const Cookies=require("cookie-parser")
const db=require("./config/db")
const UserRouter=require("./routes/route")
const isLogin=require("./middleware/login")
const app=express()
app.use(express.json());
app.use(Cookies());
app.use(express.urlencoded({ extended: true }));


//ejs

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


app.get("/user",(req,res)=>{
    let {username,email} = req.cookies;
    res.render("index",{username,email})
});

app.use("/user",UserRouter)

// app.post('/user/signup', (req, res) => {
//     const { username, password } = req.body;
//     // Logic for signing up a user
//     res.status(200).send('Signup successful');
// });

// app.post('/user/login', (req, res) => {
//     const { email, password } = req.body;

//     // Validate the username and password
//     if (email && password) {
//         res.status(200).json({ message: 'Login successful' });
//     } else {
//         res.status(401).json({ message: 'Invalid credentials' });
//     }
// });


app.listen(8000,()=>{
    console.log("listening on http://localhost:8000");
    db();
})