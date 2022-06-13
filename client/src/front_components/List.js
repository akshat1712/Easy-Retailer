import React from 'react'
import RetailerInfo from './RetailerInfo'
import data from '../components/data'

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