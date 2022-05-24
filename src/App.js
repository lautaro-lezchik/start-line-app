import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import LandPage from './components/pages/LandPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from "./components/pages/Shop";
import Login from './components/pages/Login';
import CrearCuenta from './components/pages/CrearCuenta';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element= {<LandPage />} />
          <Route path='/shop' element= {<Shop />} />
          <Route path='/login' element= {<Login />} />
          <Route path='/crear-cuenta' element= {<CrearCuenta />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
