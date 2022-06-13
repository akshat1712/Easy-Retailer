import React from 'react'

export const InventoryAdd = () => {

    const [itemArray,setItemArray] = React.useState([]);
    const [QuantityArray,setQuantityArray] = React.useState([]);
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
    
    function addquantity()
    {
        setQuantityArray(prevArray => [...prevArray,formData.quantity])
    }

    const itemArrayEls = itemArray.map(item => <div>{item}</div>)
    const quantityArrayEls = QuantityArray.map(quantity => <div>{quantity}</div>)

    return (
        <div className='search-container'>
            <div className='item-container'>
                <input id="item" type="text" placeholder='Item' onChange={handleChange} />
                <button className='add' onClick={addItem}>+</button>
                <div className='array-item'>{itemArrayEls}</div>
            </div>
            <div className='location-container'>
                <input id="quantity" type="text" placeholder='Quantity' onChange={handleChange} />
                <button className='add' onClick={addquantity}>+</button>
                <button className='sub' onClick={addquantity}>-</button>
                <div className='array-item'>{quantityArrayEls}</div>
            </div>
            <button className='search'>Update</button>
        </div>
    )

}
