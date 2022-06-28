import React,{useContext, useEffect} from 'react'
import ListItem from './ListItem'
import Container from 'react-bootstrap/Container';
import { GlobalContext } from '../../context/GlobalState';
import { userContext } from '../../context/userContext';
import {motion, AnimatePresence} from 'framer-motion';


export const List = ({reqRetailers, darkMode}) => {
    
    const {retailerList,retailers,getretailers } = useContext(GlobalContext);
    const {user} = useContext(userContext);

    useEffect(()=>{
        getretailers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const customerList = reqRetailers ? reqRetailers : retailers;
    const data=user.user? retailerList : customerList;
    
    const Array = data.map(Item=> {
        return (
                <ListItem
                {...Item}
                darkMode={darkMode}
                />
                )
    });
    
    return (
        <Container>
            <div className={darkMode ? 'dark-list-container': 'list-container'}>
                {Array}
            </div>
        </Container>
    )
}

