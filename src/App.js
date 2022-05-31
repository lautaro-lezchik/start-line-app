import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import LandPage from './pages/LandPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from "./pages/Shop";
import Login from './pages/Login';
import CrearCuenta from './pages/CrearCuenta';
import Logout from './pages/Logout';
import { useContext } from 'react';
import LoginContext from './context/LoginContext';
import GetRedirected from './pages/GetRedirected';
import Cart from './pages/Cart';

function App() {
  const {login} = useContext(LoginContext)

  return (
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element= {<LandPage />} />
            <Route path='/shop'  element= {login ? <Shop />: <GetRedirected /> }   />
            <Route path='/cart'  element= {login ? <Cart />: <GetRedirected /> }   />
            <Route path='/category/:idCategory' element= {<Shop />} />
            <Route path='/login' element= {<Login />} />
            <Route path='/logout' element= {<Logout />} />
            <Route path='/crear-cuenta' element= {<CrearCuenta />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
