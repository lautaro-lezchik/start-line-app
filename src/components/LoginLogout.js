import React from 'react'
import { useContext } from "react"
import LoginContext from '../context/LoginContext'
import {  Col } from "react-bootstrap"
import { Link } from "react-router-dom"


const LoginLogout = () => {
    const {login} = useContext(LoginContext)
    const path = login ? "/logout" : "/login"
    const text = login? "log out" : "Log in"
    return (
        <Col className="navCol text-center mt-2" md={12}>
            <Link to={path} className="linksHeader">
                {text}
            </Link>
        </Col>
    )
    }

export default LoginLogout;