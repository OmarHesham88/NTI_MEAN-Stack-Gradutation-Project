// npm i nodemon, express, mongoose


const mongoose = require('mongoose');

const connectDB = async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/myDB');
    console.log('database connected');
}

module.exports = connectDB;

// this was he configuration of DB


