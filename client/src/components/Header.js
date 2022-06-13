import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import './styling/Header.css';

export const Header = () => {

  let login=1;

  return (
    <Navbar bg="info" variant="light" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home"> <h3>Logo</h3></Navbar.Brand>

        <Navbar.Toggle  />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Navbar.Text className='mx-2' >
            <h5>
              <b>
                { login? 'Retailer': 'Customer'}
              </b>
            </h5>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
