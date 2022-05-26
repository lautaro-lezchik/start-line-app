import React, { useContext } from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import LoginContext from '../context/LoginContext';


const Logout = () => {
    const navigate = useNavigate()
    const context = useContext(LoginContext)
    const auth = getAuth();

signOut(auth)
.then(() => {
    context.getLogin(false)
    console.log("Se envia false");

})
.then(() => {
    console.log("Se cierra la sesion");
    navigate('/')
})
.catch((error) => {
    console.log("hay error", error);

});
    return (
        <>
        </>
    )
}

export default Logout