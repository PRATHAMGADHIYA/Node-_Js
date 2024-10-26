const { default: mongoose } = require('mongoose');
require("dotenv").config();


const dbConnection = async () => {
    await mongoose.connect(process.env.DB_URL);
    console.log("Mongodb connection");

}
module.exports = dbConnection;