import React,{useContext} from 'react'
import ListItem from './ListItem'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import { GlobalContext } from '../../context/GlobalState';

const retailer=[
    {
        Item: "Item",
        Quantity: "Quantity"
    },
    {
        Item: "Lays",
        Quantity: "45"
    },
    {
        Item: "Parle-G",
        Quantity: "23"
    },
    {
        Item: "Coca Cola",
        Quantity: "100"
    }
]

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
    const { login } = useContext(GlobalContext);

    const data=login? retailer :customer;

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

export default List
