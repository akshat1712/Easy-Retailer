import React from 'react'
import Popular from './Shared/Popular'

import Search from './customer/Search'
import { useContext } from 'react';
import { InventoryAdd } from './retailer/InventoryAdd'
import { GlobalContext } from '../context/GlobalState';

import List from './Shared/List'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


export const Front = () => {
  const { login } = useContext(GlobalContext);

  return (
    <Container fluid='true'>
      <Row>
        <div className='main-container'>
          <Col>
            {login ? <InventoryAdd /> : <Search />}
          </Col>
          <Col>
            <List  />
          </Col>
          <Col>
            <Popular l />
          </Col>
        </div>
      </Row>

    </Container>
  )
} 
