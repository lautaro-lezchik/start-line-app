import { useContext } from 'react'
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
    localStorage.setItem('isLogged', JSON.stringify(false));
    navigate('/')
})
.catch((error) => {
    console.log("hay error", error);
    alert("Ha ocurrido un error, no hemos podido completar el logout")
});
    return null
}

export default Logout