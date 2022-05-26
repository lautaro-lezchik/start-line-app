import React, { useEffect } from 'react'
import { useContext } from "react"
import LoginContext from '../context/LoginContext'


const Greeting = () => {
    const {getLogin} = useContext(LoginContext)

    if ({getLogin})
    console.log({getLogin});
    return (
        <div>BIENVENIDO</div>
        
    ) 

  /*   useEffect (()=>{
    if (context.getLogin)
    return (
        <div>BIENVENIDO</div>
        
    ) 
},[context.getLogin]) */
}

export default Greeting