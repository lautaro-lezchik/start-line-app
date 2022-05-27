import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const BelowCard = (loading) => {
    const location = useLocation();
    const text = (location.pathname==="/login") ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"
    const buttonText = (location.pathname==="/login") ? "Crear cuenta" : "Log In"
    const linkTo = (location.pathname==="/login") ? '/crear-cuenta' : '/login'

    return (
        <div className="text-center ">
            {text}
            <Link to={linkTo}>
                <Button disabled={loading} className="m-4">
                    {buttonText}
                </Button>
            </Link>
        </div>
    )
}

export default BelowCard