import React,{useContext} from 'react'
import ListItem from './ListItem'

import Container from 'react-bootstrap/Container';


import { GlobalContext } from '../../context/GlobalState';

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

