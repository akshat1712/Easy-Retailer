import React from 'react'
import Popular from '../Shared/Popular'

import Search from '../customer/Search'
import { useContext } from 'react';
import { InventoryAdd } from '../retailer/InventoryAdd'
import { GlobalContext } from '../../context/GlobalState';

import {List} from '../Shared/List'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import {motion} from 'framer-motion'


export const Front = () => {
  const { login } = useContext(GlobalContext);
  const containerVariants = {
    hidden:{
      opacity: 0
    },
    visible:{
      opacity: 1,
      transition:{
        delay: 0.5,
        duration: 1.5
      }
    },
    exit:{
      x: '-100vw',
      transition:{ease: "easeInOut", duration: 1.0}
    }
  }

  const [reqRetailers, setReqRetailers] = React.useState([]);

  return (
    <Container fluid='true'>
        <motion.div className='main-container'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          >
        <Row>
          <Col xs={12} sm={12} md={6} xl={4}>
            {login ? <InventoryAdd /> : <Search sellers_retailer={reqRetailers} setSellersRetailer={setReqRetailers}/>}
          </Col>
          <Col xs={12} sm={12} md={6} xl={4}>
            <List  reqRetailers={reqRetailers}/>
          </Col>
          <Col xs={12} sm={12} md={{ span: 6, offset: 3 }} xl={{span:4, offset:0}}>
            <Popular l />
          </Col>
      </Row>
        </motion.div>
    </Container>
  )
} 
