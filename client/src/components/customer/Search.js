import React from 'react'
import axios from 'axios';
import ArrayItem from './ArrayItem';
import {motion} from 'framer-motion'
import { size } from 'lodash';

export default function Search({sellers_retailer, setSellersRetailer})
{
    const [itemArray,setItemArray] = React.useState([]);
    const [locationArray,setLocationArray] = React.useState([]);
    const [formData,setFormData] = React.useState({item: "", location: ""});
    function handleChange(event)
    {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.id]: event.target.value
            }
        })
    }
    
    async function handlequery(event){
        event.preventDefault();
        
        const sellers=[];
        const config= {
            headers:{
                'Content-Type': 'application/json'
            }
        }

        const query_param=[];
        for( const item of itemArray){
            query_param.push({name:item,quantity:1});
        }

        const res= await axios.post("/retailer/retailerswith",{inventory:query_param},config);

        for( const ind in res.data)
        {
            for(const retailer of res.data[ind].sellers)
                sellers.push({Name:retailer.retailer_name,Location:retailer.location});
        }
        setItemArray([]);
        setLocationArray([]);
        setFormData({item:"",location:""});
        setSellersRetailer(sellers);
        // console.log(sellers);
    }
    
    function addItem(e)
    {
        if(formData.item !== "" && !itemArray.includes(formData.item))
        {
            setItemArray(prevArray => [...prevArray,formData.item])
        }
        else
        {
            alert("Please enter a new item. Thanks!")
        }
        document.getElementById('item').value = "";
        return;
    }
    
    function addLoc(e)
    {
        if(formData.location !== "" && !locationArray.includes(formData.location))
        {

            setLocationArray(prevArray => [...prevArray,formData.location])
        }
        else
        {
            alert("Please enter a new location. Thanks!")
        }
        document.getElementById('location').value = "";
        return;
    }

    // console.log(itemArray)
    // console.log(locationArray)

    const itemArrayEls = itemArray.map(item => {
        return <ArrayItem 
                    thing={item}
                    setThingArray={setItemArray}
                />
    })
    const locationArrayEls = locationArray.map(location => {
        return <ArrayItem 
                    thing={location}
                    setThingArray={setLocationArray}
                />
    })

    const searchVariants = {
        hover: {
            scale: 1.1,
            transition:{
                ease: "easeInOut"
            },
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
        },
        tap:{
            scale: 0.7,
            transition:{
                ease: "easeInOut"
            }
        }
    }

    const addVariants ={
        tap:{
            scale: 0.7,
            transition:{
                ease: "easeInOut"
            }
        }
    }

    return (
        <form className='search-container' on onSubmit={handlequery}>
            <div className='item-container'>
                <input id="item" type="text" placeholder='Item' onChange={handleChange} />
                <motion.button type="button" className='add' onClick={addItem} variants={addVariants} whileTap="tap">+</motion.button>
                <div className='array-item'>{itemArrayEls}</div>
            </div>
            <div className='location-container'>
                <input id="location" type="text" placeholder='Location' onChange={handleChange} />
                <motion.button type="button" className='add' onClick={addLoc} variants={addVariants} whileTap="tap">+</motion.button>
                <div className='array-item'>{locationArrayEls}</div>
            </div>
            <motion.button className='search'
                            variants={searchVariants}
                            whileHover="hover"
                            whileTap="tap"
            >Search!</motion.button>
        </form>
    )
}

// { sellers_retailer.map( (retailer)=>{
//     return(
//         <h3>{retailer.Name}</h3>
//     )
// })}