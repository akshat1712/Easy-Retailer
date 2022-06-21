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
        hidden:{
            x: "-100vw",
            opacity: 0
        },
        visible:{
            x:0,
            opacity: 1,
            transition:{
                type: "spring",
                stiffness: 80,
                // duration: 0.25
            }
        },
        hover:{
            scale: 1.1,
            transition:{
                ease: "easeInOut"
            },
        }
    }

    return (
        <motion.div
            className='array-item-container'
            variants={arrayItemVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                variants={arrayItemVariants}
                whileHover="hover"
            >{thing}</motion.div>
            <motion.span id="cancel" className="material-symbols-outlined"
                onClick={handleCancel}
                variants={arrayItemVariants}
                whileHover="hover"
            >cancel</motion.span>
        </motion.div>
    )
}