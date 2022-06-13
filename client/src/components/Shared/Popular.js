import React from 'react'

export default function Popular( {login})
{
    return (
        <div className='pop-container'>
            <div className="popular">
                <h3 id='pop-items'>Popular Items</h3>
            </div>

            {!login? 
            <div className="popular">
                <h3 id='pop-retailers'>Popular Retailers</h3>
            </div>: <></> }
        </div>
    )
}