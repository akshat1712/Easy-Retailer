const asyncHandler = require('express-async-handler');
const Retailer = require('../models/retailerModel');

const getRetailersWith = asyncHandler(async(req, res)=>{
    const { inventory } = req.body;
    if (!inventory){
        res.status(400).json({
            errorcode:400,
            message: "Missing query"
        });
    }
    let availableRetailers = [];
    for (const item of inventory){
        if (item.quantity < 0){
            res.status(400).json({
                errorcode: 400,
                message: "Quantity cannot be negative"
            })
            return;
        }
        const foundRetailers = await Retailer.find({$and : [{ "inventory.name" : item.name},{"inventory.quantity" : {$gte : item.quantity}}]}).select('-password -inventory')
        availableRetailers.push({name: item.name, sellers: foundRetailers});
    };
    res.status(200).json(availableRetailers);
})

const updateInventory = asyncHandler(async (req, res) =>{
    const { inventory } = req.body;
    console.log(inventory);
    if (!inventory){
        res.status(400).json({
            errorcode: 400,
            message: "Missing inventory"
        })
        return;
    }

    const updateMessage = await Retailer.findByIdAndUpdate({_id: req.retailer._id},{ $set: {inventory : inventory}});
    if (!updateMessage){
        res.status(400).json({
            errorcode: 400,
            message: "Unauthorized access: User does not exist"
        });
    } else res.status(200).json(inventory);
})


module.exports = { updateInventory, getRetailersWith }; 
