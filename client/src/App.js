import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styling/styles.css';

import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Front } from './components/pages/Front';
import { Footer } from './components/Footer';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Front darkMode={darkMode} />} />
          <Route path='/login' element={<Login darkMode={darkMode} />} />
          <Route path='/register' element={<Register darkMode={darkMode} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
