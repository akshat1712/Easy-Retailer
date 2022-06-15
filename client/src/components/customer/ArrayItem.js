import React from 'react'

export default function ArrayItem(props)
{
    const {thing,setThingArray} = props;

    function handleCancel()
    {
        setThingArray(prevArr => {
            return prevArr.filter((e) => e!== thing);
        })
    }

    return (
        <div className='array-item-container'>
            <div>{thing}</div>
            <span id="cancel" className="material-symbols-outlined"
                onClick={handleCancel}
            >cancel</span>
        </div>
    )
}