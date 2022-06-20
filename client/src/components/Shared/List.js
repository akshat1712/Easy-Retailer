import React,{useContext} from 'react'
import ListItem from './ListItem'
import Container from 'react-bootstrap/Container';
import { GlobalContext } from '../../context/GlobalState';
import {motion} from 'framer-motion';

const customer=[
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

export const List = () => {
    
    const { login,retailerList } = useContext(GlobalContext);
    const data=login? retailerList :customer;    
    const listItemVariants = {
        hover:{
            scale: 1.1,
            transition:{
                ease: "easeInOut"
            },
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
        }
    }
    
    const Array = data.map(Item=> {
        return <ListItem
                {...Item}
                variants={listItemVariants}
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

