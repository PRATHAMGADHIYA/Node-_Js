const express = require('express');
const DB = require('./db')
const student = require('./model')
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("welcome to the server");
})

app.get("/students", async (req, res) => {
    const data = await student.find()
    res.send(data);
});

app.get("/student/:id", async (req, res) => {
    const { id } = req.params;
    const data = await student.findById(id);
    res.send(data);
});

app.post("/students", async (req, res) => {
    const data = await student.create(req.body);
    res.send(data);
});

app.patch("/student/:id", async (req, res) => {
    let { id } = req.params;
    let data = await student.findByIdAndUpdate(id, req.body); ({ new: true });
    res.send(data);
});

app.delete("/student/:id", async (req, res) => {
    let { id } = req.params;
    let data = await student.findByIdAndDelete(id);
    res.send(data);
});

app.listen(5050, () => {
    console.log("listening port on http://localhost:5050");
    DB();
});