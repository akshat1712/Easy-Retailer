const express = require('express');
const morgan = require('morgan');
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

app.use(morgan('dev'));

// Routers defined
const RetailerRouter = require('./routes/retailer');
const CustomerRouter = require('./routes/customer');
app.use('/retailer', RetailerRouter);
app.use('/customer',CustomerRouter);
// Ended

app.listen(5000);


