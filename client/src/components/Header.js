import React, {useContext} from 'react'

import { GlobalContext } from '../context/GlobalState';

import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {

  const { login } = useContext(GlobalContext);

  return (
    <Navbar bg="info" variant="light" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"> <h3>Logo</h3></Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <LinkContainer to="/login">
            {login ? (
              <Navbar.Text className='mx-2' as={Link} to='/' >
                <h5>
                  <b >
                    Logout
                  </b>
                </h5>
              </Navbar.Text>

            ) : (
              <Navbar.Text className='mx-2' as={Link} to='/login' >
                <h5>
                  <b >
                    Retailer
                  </b>
                </h5>
              </Navbar.Text>

            )}
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
