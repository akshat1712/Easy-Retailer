import React, { useContext } from 'react'

import { userContext } from '../context/userContext';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import authHelper from '../context/authHelper';

// import logo from './EasyRetailerLogo_1.svg';
import logo from './logos/Logo.svg';
export const Header = ({ darkMode, setDarkMode }) => {

  const { user, dispatch } = useContext(userContext);
  const navigate = useNavigate();
  const logoVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
    }
  }

  function toggleDarkMode() {
    setDarkMode(prev => !prev);
  }

  const toggleDarkVariants = {
    tap: {
      rotateZ: 360,
    }
  }

  function handleLogout() {
    authHelper.logout();
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  }

  return (
    <>
      <Navbar bg="info" variant="light" sticky="top" expand="lg">
        <Container>
          <div className='logo-toggle-container'>
            <motion.span
              variants={toggleDarkVariants}
              whileTap='tap'
              className="material-symbols-outlined dark-mode-toggle"
              onClick={toggleDarkMode}
            >brightness_4</motion.span>
            <Navbar.Brand as={Link} to="/">
              <motion.img
                variants={logoVariants}
                whileHover="hover"
                src={logo}
                width="12.5%"
                height="12.5%"
                className="d-inline-block align-top"
                alt="logo" />
            </Navbar.Brand>
          </div>

          <Navbar.Toggle />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            {user.user ? (
              <Navbar.Text className='mx-2' onClick={handleLogout} >
                <motion.h5
                  variants={logoVariants}
                  whileHover="hover"
                >
                  <b >
                    Logout
                  </b>
                </motion.h5>
              </Navbar.Text>

            ) : (
              <>
                <Navbar.Text className='mx-2' as={Link} to='/login' >
                  <motion.h5
                    variants={logoVariants}
                    whileHover="hover"
                  >
                    <b >
                      Login
                    </b>
                  </motion.h5>
                </Navbar.Text>
                <Navbar.Text className='mx-2' as={Link} to='/register' >
                  <motion.h5
                    variants={logoVariants}
                    whileHover="hover"
                  >
                    <b >
                      Register
                    </b>
                  </motion.h5>
                </Navbar.Text>
              </>

            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}
