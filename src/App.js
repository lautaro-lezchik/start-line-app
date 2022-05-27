import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import LandPage from './pages/LandPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from "./pages/Shop";
import Login from './pages/Login';
import CrearCuenta from './pages/CrearCuenta';
import Logout from './pages/Logout';
import Cart from './pages/Cart';
import { useContext } from 'react';
import LoginContext from './context/LoginContext';
import GetRedirected from './pages/GetRedirected';

function App() {
  const {login} = useContext(LoginContext)

  return (
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element= {<LandPage />} />
            <Route path='/shop'  element= {login ? <Shop />: <GetRedirected /> }   />
            <Route path='/category/:idCategory' element= {<Shop />} />
            <Route path='/login' element= {<Login />} />
            <Route path='/logout' element= {<Logout />} />
            <Route path='/crear-cuenta' element= {<CrearCuenta />} />
            <Route path='/cart' element= {<Cart />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
