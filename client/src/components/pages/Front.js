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
      transition:{ease: "easeInOut"}
    }
  }

  return (
    <Container fluid='true'>
      <Row>
        <motion.div className='main-container'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Col>
            {login ? <InventoryAdd /> : <Search />}
          </Col>
          <Col>
            <List  />
          </Col>
          <Col>
            <Popular l />
          </Col>
        </motion.div>
      </Row>

    </Container>
  )
} 
