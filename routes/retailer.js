const path=require('path');

require('dotenv').config({path: path.resolve(__dirname, '../.env')});

// console.log(process.env.DATABASE);

const express = require("express");
const router=express.Router();
const mongoose= require('mongoose'); 

mongoose.connect(process.env.DATABASE,{
    dbName:'Inventories',
}, err => err? console.log(err): console.log("Connected"));


const RetailerSchema= new mongoose.Schema({
    Retailer: String,
    Location: String,
    Items: Object
});


let Table1;
try {
    Table1=mongoose.model('Table1');
} catch(error){
    Table1=mongoose.model('Table1',RetailerSchema);
}



router.get('/',(req,res)=>{

    const row= new Table1({
        name:'EFGH',
        Location:"Delhi",
        Items:{
            "Hide&Seek":10,
            "Lays":20,
        }
    });
    row.save().then( ()=>console.log("Added"));
    res.send("Retailer Added");

})

module.exports = router;