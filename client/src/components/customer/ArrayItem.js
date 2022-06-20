import React from 'react'
import {motion} from 'framer-motion'

export default function ArrayItem(props)
{
    const {thing,setThingArray} = props;

    function handleCancel()
    {
        setThingArray(prevArr => {
            return prevArr.filter((e) => e!== thing);
        })
    }
    const arrayItemVariants = {
        hover:{
            scale: 1.1,
            transition:{
                ease: "easeInOut"
            },
        }
    }

    return (
        <div className='array-item-container'>
            <motion.div
                variants={arrayItemVariants}
                whileHover="hover"
            >{thing}</motion.div>
            <motion.span id="cancel" className="material-symbols-outlined"
                onClick={handleCancel}
                variants={arrayItemVariants}
                whileHover="hover"
            >cancel</motion.span>
        </div>
    )
}