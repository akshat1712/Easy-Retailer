const express = require("express");
const router=express.Router();
const path=require('path');


const { getRetailers } = require('../controllers/retailerController');

const {getPopularItems} = require('../controllers/popularItem');
const {getPopularRetailer} = require('../controllers/popularRetailer');

const {  getRetailersWith } = require('../controllers/inventoryController');

require('dotenv').config({path: path.resolve(__dirname, '../.env')});

router.get('/',getRetailers);
router.get('/popularitem',getPopularItems);
router.get('/popularretailer',getPopularRetailer);

router.post('/search',getRetailersWith);

module.exports=router;