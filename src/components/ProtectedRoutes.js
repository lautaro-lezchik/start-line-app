import React from 'react'
import { useContext } from 'react';
import LoginContext from '../context/LoginContext';
import { Route, Routes} from "react-router-dom";
import Cart from '../pages/Cart';
import LandPage from '../pages/LandPage';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Shop from "../pages/Shop";
import CrearCuenta from '../pages/CrearCuenta';
import GetRedirected from '../pages/GetRedirected';

const ProtectedRoutes = () => {
    const {login} = useContext(LoginContext)


    const availableRoutes = 
    login ?
    <Routes>
            <Route path='/' element= {<LandPage />} />
            <Route path='/shop'  element= { <Shop /> }   />
            <Route path='/cart'  element= { <Cart /> }   />
            <Route path='/category/:idCategory' element= {<Shop />} />
            <Route path='/logout' element= {<Logout />} />
    </Routes>
    :
    <Routes>
            <Route path='/' element= {<LandPage />} />
            <Route path='/login' element= {<Login />} />
            <Route path='/crear-cuenta' element= {<CrearCuenta />} />
            <Route path='/get-redirected' element= {<GetRedirected />} />
            <Route path='*' element={<GetRedirected/>} />
    </Routes>

    return (
        <div>{availableRoutes}</div>
    )
}

export default ProtectedRoutes