import React,{useContext, useEffect} from 'react'
import ListItem from './ListItem'
import Container from 'react-bootstrap/Container';
import { GlobalContext } from '../../context/GlobalState';
import {motion} from 'framer-motion';


export const List = () => {
    
    const { login,retailerList,retailers,getretailers } = useContext(GlobalContext);

    useEffect(()=>{
        console.log("Hello");
        getretailers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const data=login? retailerList :retailers;    
    // const listItemVariants = {
    //     hidden:{
    //         y: "-100vh",
    //         opacity: 0
    //     },
    //     visible:{
    //         y:0,
    //         opacity:1
    //     },
    //     hover:{
    //         scale: 1.1,
    //         transition:{
    //             ease: "easeInOut"
    //         },
    //         boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
    //     }
    // }
    
    const Array = data.map(Item=> {
        return <ListItem
                {...Item}
                />
    });
    
    return (
        <Container>
            <div className='list-container'>
                {Array}
            </div>
        </Container>
    )
}

