import React from 'react'
import axios from 'axios';
import ArrayItem from './ArrayItem';
import {motion} from 'framer-motion'


export default function Search({sellers_retailer, setSellersRetailer, darkMode})
{
    const [itemArray,setItemArray] = React.useState([]);
    const [locationArray,setLocationArray] = React.useState([]);
    const [formData,setFormData] = React.useState({item: "", location: ""});
    const [allRetailerInfo, setAllRetailerInfo] = React.useState([]);
    const [filteredData,setFilteredData] = React.useState({filteredItems: [], filteredLocations: []});
    const [clickedFilter, setClickedFilter] = React.useState({item: false, location: false});

    React.useEffect(() => {
        async function fetchData()
        {
            const res = await axios.get('/retailer');
            // console.log(res.data);
            setAllRetailerInfo(res.data);
        }
        fetchData();
    },[])

    const inventoryArray = allRetailerInfo.map(retailer => {
        const allItems = retailer.inventory.map(item => item.name);
        return allItems;
    })

    const allLocationsDup = allRetailerInfo.map(retailer => retailer.location);
    const allLocations = [];
    const locationCount = new Map();
    for(let i=0;i<allLocationsDup.length;i++)
    {
        const locDup = allLocationsDup[i].toUpperCase();
        if(locationCount.get(locDup) != 1)
        {
            locationCount.set(locDup,1);
            allLocations.push(locDup);
        }
    }

    const allItems = [];
    const itemCount = new Map();
    for(let i=0;i<inventoryArray.length;i++)
    {
        for(let j=0;j<inventoryArray[i].length;j++)
        {
            if(itemCount.get(inventoryArray[i][j]) != 1)
            {
                itemCount.set(inventoryArray[i][j],1);
                allItems.push(inventoryArray[i][j]);
            }
        }
    }
    // console.log(allItems);

    function handleChange(event)
    {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.id]: event.target.value
            }
        })
        const searchParams = {item: formData.item, location: formData.location};
        setFilteredData((prevFilteredData) => {
            return {
                ...prevFilteredData,
                filteredItems: allItems.filter(item => item.toLowerCase().includes(searchParams.item.toLowerCase())),
                filteredLocations: allLocations.filter(location => location.toLowerCase().includes(searchParams.location.toLowerCase()))
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
                sellers.push({Name:retailer.retailer_name,Contact:retailer.contact});
        }
        setItemArray([]);
        setLocationArray([]);
        setFormData({item:"",location:""});
        setSellersRetailer(sellers);
        // console.log(sellers);
    }
    
    function addItem(e)
    {
        if(e.target.tagName === 'LI')
        {
            document.getElementById('item').value = e.target.innerHTML;
            setFormData(prevData => ({...prevData, item: e.target.innerHTML}));
            setClickedFilter(prev => ({...prev, item: true}));
        }
        else if(clickedFilter.item)
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
            setFormData(prevData => ({...prevData, item: ""}));
            setClickedFilter(prev => ({...prev, item: false}))
        }
        else
        {
            alert("Please use the filtered search. Thanks!")
        }
        return;
    }
    
    function addLoc(e)
    {
        if(e.target.tagName === 'LI')
        {
            document.getElementById('location').value = e.target.innerHTML;
            setFormData(prevData => ({...prevData, location: e.target.innerHTML}));
            setClickedFilter(prev => ({...prev, location: true}));
        }
        else if(clickedFilter.location)
        {
            if(formData.location !== "" && !locationArray.includes(formData.location))
            {
    
                setLocationArray(prevArray => [...prevArray,formData.location]);
            }
            else
            {
                alert("Please enter a new location. Thanks!")
            }
            document.getElementById('location').value = "";
            setFormData(prevData => ({...prevData, location: ""}));
            setClickedFilter(prev => ({...prev, location: false}))
        }
        else 
        {
            alert("Please use the filtered search. Thanks!")
        }
        return;
    }

    // console.log(itemArray)
    // console.log(locationArray)

    const itemArrayEls = itemArray.map(item => {
        return <ArrayItem 
                    thing={item}
                    setThingArray={setItemArray}
                    darkMode={darkMode}
                />
    })
    const locationArrayEls = locationArray.map(location => {
        return <ArrayItem 
                    thing={location}
                    setThingArray={setLocationArray}
                    darkMode={darkMode}
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
        <form 
            className={darkMode ? 'dark-search-container':'search-container'} 
            onSubmit={handlequery}
        >
            <div className='item-container'>
                <input 
                    id='item'
                    className={darkMode ? 'dark-item':'item'} 
                    type="text" 
                    placeholder='Item' 
                    onChange={handleChange} 
                />
                <motion.button 
                    type="button" 
                    className={darkMode ? 'dark-add':'add'} 
                    onClick={addItem} 
                    variants={addVariants}
                    whileTap="tap"
                >+</motion.button>
                {formData.item!="" && <ul className={darkMode ? 'dark-smart-search' : 'smart-search'}>{filteredData.filteredItems.map(item => <li onClick={addItem}>{item}</li>)}</ul>}
                <div className='array-item'>{itemArrayEls}</div>
            </div>
            <div className='location-container'>
                <input 
                    id='location'
                    className={darkMode ? 'dark-location':'location'} 
                    type="text" 
                    placeholder='Location' 
                    onChange={handleChange} 
                />
                <motion.button 
                    type="button" 
                    className={darkMode ? 'dark-add':'add'}
                    onClick={addLoc} 
                    variants={addVariants} 
                    whileTap="tap"
                >+</motion.button>
                {formData.location!="" && <ul className={darkMode ? 'dark-smart-search' : 'smart-search'}>{filteredData.filteredLocations.map(location => <li onClick={addLoc}>{location}</li>)}</ul>}           
                <div className='array-item'>{locationArrayEls}</div>
            </div>
            <motion.button 
                className={darkMode ? 'dark-search':'search'}
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