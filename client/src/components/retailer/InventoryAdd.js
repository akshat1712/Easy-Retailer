import React, {useState} from 'react'

export const InventoryAdd = () => {


    const [quantity,SetQuantity]=useState(0);
    const [item,SetItem]=useState('');

    const handleItem = (e)=>{
        SetItem(e.target.value);
    }

    const handlequantity = (e)=>{
        SetQuantity(e.target.value);
    }

    const handlesearch = (e)=>{
        console.log(item,quantity);
        SetItem('');
        SetQuantity(0);
    }

    return (
        <div className='search-container'>

            <form className='item-container'>
                <input id="item" type="text" placeholder='Item' value={item} onChange={handleItem}/>
                <input id="quantity" type="number" placeholder='Quantity' value={quantity} onChange={handlequantity} />
                <button className='search' onClick={handlesearch}>Update</button>
            </form>

        </div>
    )

}
