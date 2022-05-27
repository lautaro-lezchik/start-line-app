import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LoginContext from '../context/LoginContext'

const HiddenRoutes = () => {
    const {login} = useContext(LoginContext)

    return  login ? (
        
        <div>
            <Link to="/shop" className="linksHeader">
                Shop
            </Link>
        </div>
    ) : null
}

export default HiddenRoutes