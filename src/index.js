import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginContext from './context/LoginContext';



const ContextProvider = (props) => {
  const [login, setLogin] = useState (false)
  const [cartList, setCartList] = useState([])
  


  useEffect(() => {
    const isLogged = JSON.parse(localStorage.getItem('isLogged'));
    if (isLogged) {
      setLogin(isLogged);
    }
  }, []);

  const initialState ={
    getLogin:(isLogged) =>{
      setLogin(isLogged)
      console.log("llega state", isLogged);
    },
    cart:(getCartList) =>{
      setCartList(...cartList, getCartList)
      console.log("llega cart", cartList);
    },
    login,
    cartList,
}

  return (
    <LoginContext.Provider value={initialState}>
      {props.children}
    </LoginContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

