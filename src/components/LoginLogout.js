import React from 'react'
import { useContext } from "react"
import LoginContext from '../context/LoginContext'
import {  Col } from "react-bootstrap"
import { Link } from "react-router-dom"


const LoginLogout = () => {
    const context = useContext(LoginContext)

    if (context.getLogin)
    return (
        <Col className="navCol" md={1}>
                    <Link to='/logout' className="linksHeader">
                        log out
                    </Link>
                </Col>
    )
    return (
        <>
        <Col className="navCol" md={1}>
                    <Link to='/login' className="linksHeader">
                        log in
                    </Link>
                </Col>
                </>
    );
    }

export default LoginLogout;