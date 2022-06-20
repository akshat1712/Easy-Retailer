const asyncHandler = require('express-async-handler');
const popretailer = require("../models/popularRetailerModel");
const popitem = require("../models/popularItemModel");

const PopRetailer = asyncHandler( async(Retailer) => {
    for( const name in Retailer){
        popretailer.updateOne({ Name:name}, { $inc : {Queried:1}});
    }
});

const PopItems = asyncHandler( async(Items) => {
    for( const item in Items){
        const count= popitem.count( {Item:item});
        if(count)
        {
            popitem.insertOne( { Item:item, Queried:1});
        }
        else
        {
            popitem.updateOne( {Item:item}, { $inc : {Queried:1}});
        }
    }
});

module.exports = {PopRetailer,PopItems};