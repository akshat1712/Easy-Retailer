const path=require('path');
require('dotenv').config();

const express=require('express'); 
const app=express(); 
app.listen(3000);

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


// Routers defined
const RetailerRouter = require('./routes/retailer');
app.use('/retailer',RetailerRouter);
// Ended


app.get('/',(req,res)=>{
    Table1.find({},(err,found)=>{
        if(!err){
            res.send(found);
        }
        else
        {
            console.log(err);
            res.send("Some Error Occured");
        }
    })
})