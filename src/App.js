import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import LandPage from './pages/LandPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from "./pages/Shop";
import Login from './pages/Login';
import CrearCuenta from './pages/CrearCuenta';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path='/' element= {<LandPage />} />
            <Route path='/shop' element= {<Shop />} />
            <Route path='/login' element= {<Login />} />
            <Route path='/crear-cuenta' element= {<CrearCuenta />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
