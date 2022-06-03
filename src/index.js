import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginContext from './context/LoginContext';
import { Provider } from 'react-redux';
import myStore from './redux/Store';



const ContextProvider = (props) => {
  const [login, setLogin] = useState (false)
  
  useEffect(() => {
    const isLogged = JSON.parse(localStorage.getItem('isLogged'));
    if (isLogged) {
      setLogin(isLogged);
    }
  }, []);

  const initialState ={
    setLogin:(isLogged) =>{
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
      <Provider store={myStore}>
        <App />
      </Provider>
    </ContextProvider>
  </React.StrictMode>
);

