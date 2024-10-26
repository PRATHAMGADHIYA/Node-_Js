const express = require("express");
const dbconnect = require('./db');
const mongoose = require('mongoose');
const isvalid = require('./validate');
const users = require('./user.model');
const app = express();
app.use(express.json());
app.get('/', async (req, res) => {
    let data = await users.find()
    res.send(data);
})

app.post('/', async (req, res) => {
    let data = await users.create(req.body)

    res.send(data);
})

app.delete('/:id', async (req, res) => {
    let {id}=req.params;

    let data = await users.findByIdAndDelete(id);
    
    res.send(data);
})

app.patch('/:id', async (req, res) => {
    let {id}=req.params

    let data = await users.findByIdAndUpdate(id,req.body,{new:true});
    res.send(data);
});

app.listen(6060, () => {
    console.log("server listening on http://localhost:6060/");
    dbconnect();
})
