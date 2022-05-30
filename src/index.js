import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginContext from './context/LoginContext';


const ContextProvider = (props) => {
  const [login, setLogin] = useState (false)
  


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
    login,
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

