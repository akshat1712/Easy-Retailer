import React from 'react'

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
    
    function addItem()
    {
        setItemArray(prevArray => [...prevArray,formData.item])
    }
    
    function addLoc()
    {
        setLocationArray(prevArray => [...prevArray,formData.location])
    }

    const itemArrayEls = itemArray.map(item => <div>{item}</div>)
    const locationArrayEls = locationArray.map(location => <div>{location}</div>)

    return (
        <div className='search-container'>
            <div className='item-container'>
                <input id="item" type="text" placeholder='Item' onChange={handleChange} />
                <button className='add' onClick={addItem}>+</button>
                <div className='array-item'>{itemArrayEls}</div>
            </div>
            <div className='location-container'>
                <input id="location" type="text" placeholder='Location' onChange={handleChange} />
                <button className='add' onClick={addLoc}>+</button>
                <div className='array-item'>{locationArrayEls}</div>
            </div>
            <button className='search'>Search!</button>
        </div>
    )
}