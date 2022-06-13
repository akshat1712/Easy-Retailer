import React from 'react'


export default function RetailerInfo(props)
{
    return (
        <div className='retailer-info-container'>
            <div className='retailer-name-container'>
                <span className="material-symbols-outlined">person</span>
                <span className='retailer-name'>{props.retailerName}</span>
            </div>
            <div className='retailer-phone-container'>
                <span className="material-symbols-outlined">call</span>
                <span className='retailer-phone'>{props.phone}</span>
            </div>
        </div>
    )
}