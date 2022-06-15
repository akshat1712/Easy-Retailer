import React from 'react'
import ArrayItem from './ArrayItem';

export default function Search()
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

    return (
        <form className='search-container'>
            <div className='item-container'>
                <input id="item" type="text" placeholder='Item' onChange={handleChange} />
                <button type="button" className='add' onClick={addItem}>+</button>
                <div className='array-item'>{itemArrayEls}</div>
            </div>
            <div className='location-container'>
                <input id="location" type="text" placeholder='Location' onChange={handleChange} />
                <button type="button" className='add' onClick={addLoc}>+</button>
                <div className='array-item'>{locationArrayEls}</div>
            </div>
            <button className='search'>Search!</button>
        </form>
    )
}