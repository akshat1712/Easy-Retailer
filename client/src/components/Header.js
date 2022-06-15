import React from 'react'

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';


export const Header = (props) => {


  return (
    <Navbar bg="info" variant="light" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home"> <h3>Logo</h3></Navbar.Brand>

        <Navbar.Toggle  />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Navbar.Text className='mx-2' >
            <h5>
              <b>
                { props.login? 'Retailer': 'Customer'}
              </b>
            </h5>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
