const express = require('express');
const app = express();

const path = require('path');
require('dotenv').config();

const mongoose = require('mongoose');

// Connecting to database
mongoose.connect(process.env.DATABASE, {
    dbName: 'Inventories',
}, err => err ? console.log(err) : console.log("Connected"));


// For parseing data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers defined
const RetailerRouter = require('./routes/retailer');
app.use('/retailer', RetailerRouter);
// Ended

app.listen(3000);