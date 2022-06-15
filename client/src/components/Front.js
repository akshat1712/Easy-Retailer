import React from 'react'
import Popular from './Shared/Popular'

import Search from './customer/Search'

import { InventoryAdd } from './retailer/InventoryAdd'

import List from './Shared/List'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


export const Front = ( props) => {
  return (
    <Container fluid='true'>
      <Row>
        <div className='main-container'>
          <Col>
            {props.login? <InventoryAdd/>:<Search />}
          </Col>
          <Col>
            <List login={props.login}/>
          </Col>
          <Col>
            <Popular login={props.login}/>
          </Col>
        </div>
      </Row>

    </Container>
  )
} 
