const express = require('express');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./config/db');
const app = express();

require('dotenv').config();



// Connecting to database

connectDB();

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


