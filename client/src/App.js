import { useContext } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styling/styles.css';

import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Front } from './components/pages/Front';
import { Footer } from './components/Footer';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import { GlobalContext } from './context/GlobalState';
import {AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation();
  const { login } = useContext(GlobalContext);
  return (
    <>
      <Header login={login} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Front login={login} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
