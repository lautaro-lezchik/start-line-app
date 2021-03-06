import { useContext } from "react"
import LoginContext from '../context/LoginContext'


const Greeting = () => {
    const {login} = useContext(LoginContext)
    const text = login ? "¡QUE BUENO VERTE DE NUEVO!" : ""
    
    return (
        <div className='text-center mt-2'>{text}</div>
    ) 
}

export default Greeting