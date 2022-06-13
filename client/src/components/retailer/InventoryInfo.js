import React from 'react'

//  Have to change class to make it responsive in nature.
export default function RetailerInfo(props)
{
    return (
        <div className='inventory-info-container'>
            <div className='inventory-item-container'>
                <span className='inventory-item'>{props.Item}</span>
            </div>
            <div className='inventory-quantity-container'>
                <span className='inventory-quantity'>{props.Quantity}</span>
            </div>
        </div>
    )
}