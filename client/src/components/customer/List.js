import React from 'react'
import RetailerInfo from './RetailerInfo'


const data=[
    {
        retailerName: "Buzz Lightyear",
        phone: "123456789"
    },
    {
        retailerName: "Buzz Lightyear",
        phone: "123456789"
    },
    {
        retailerName: "Buzz Lightyear",
        phone: "123456789"
    }
]

export default function List()
{
    const retailerElArray = data.map(retailer => {
        return <RetailerInfo
                {...retailer}
                />
    })
    
    return (
        <div className='list-container'>
            {retailerElArray}
        </div>
    )
}