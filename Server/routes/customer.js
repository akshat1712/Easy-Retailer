const express = require("express");
const router=express.Router();
const path=require('path');


const { getRetailers } = require('../controllers/retailerController');
const {popularitems} =require('../controllers/popularItem');
const {popularretailer} =require('../controllers/popularRetailer');
const {  getRetailersWith } = require('../controllers/inventoryController');

require('dotenv').config({path: path.resolve(__dirname, '../.env')});

router.get('/',getRetailers);
router.post('/search',getRetailersWith);

module.exports=router;