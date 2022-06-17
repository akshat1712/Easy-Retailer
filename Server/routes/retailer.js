const express = require("express");
const router=express.Router();
const path=require('path');

const { getRetailers, registerRetailer, loginRetailer } = require('../controllers/retailerController');

require('dotenv').config({path: path.resolve(__dirname, '../.env')});

router.get('/',getRetailers);
router.post('/register',registerRetailer);
router.post('/login',loginRetailer);

module.exports = router;