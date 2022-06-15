
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './components/styling/styles.css';

import { Header } from './components/Header';
import { Front } from './components/Front';
import {Footer} from './components/Footer';

let login=1;
function App() {
  return (
    <>
      <Header login={login}/>
      <Front login={login}/> 
      <Footer/>
    </>
  );
}

export default App;
