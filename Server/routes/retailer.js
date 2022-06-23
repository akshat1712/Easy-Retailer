const express = require("express");
const router=express.Router();
const path=require('path');
const { protect } = require('../middleware/authMiddleware');

const { getRetailers, registerRetailer, loginRetailer, currentRetailer } = require('../controllers/retailerController');
const { updateInventory, getRetailersWith } = require('../controllers/inventoryController');

require('dotenv').config({path: path.resolve(__dirname, '../.env')});

router.get('/',getRetailers);
router.get('/me', protect, currentRetailer);
router.post('/retailerswith', getRetailersWith);
router.post('/register',registerRetailer);
router.post('/login',loginRetailer);
router.put('/additems', protect, updateInventory);

module.exports = router;