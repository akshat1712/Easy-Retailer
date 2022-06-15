import { useContext } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styling/styles.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Front } from './components/Front';
import { Footer } from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import { GlobalContext } from './context/GlobalState';

function App() {

  const { login } = useContext(GlobalContext);
  return (
    <>
        <Router>
          <Header login={login} />
          <Routes>
            <Route path='/' element={<Front login={login} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>
        <Footer />
    </>
  );
}

export default App;
