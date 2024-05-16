const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.DB_URL;

const connectDB = async()=>{
    try {
        await mongoose.connect(DB_URL);
        console.log('MongoDB Connected SuccessFully')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;