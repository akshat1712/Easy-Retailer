const express = require("express");
const router=express.Router();
const path=require('path');

const { getRetailers, registerRetailer } = require('../controllers/retailerController');

require('dotenv').config({path: path.resolve(__dirname, '../.env')});

router.get('/',getRetailers)
router.post('/',registerRetailer)

module.exports = router;