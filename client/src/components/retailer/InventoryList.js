import React from 'react'
import InventoryInfo from './InventoryInfo'

const data=[
    {
        Item: "Lays",
        Quantity: "45"
    },
    {
        Item: "Parle-G",
        Quantity: "23"
    },
    {
        Item: "Coca Cola",
        Quantity: "100"
    }
]




export const InventoryList = () => {

    const InventoryArray = data.map(Inventory => {
        return <InventoryInfo
                {...Inventory}
                />
    })
    
    return (
        <div className='list-container'>
            {InventoryArray}
        </div>
    )
}
