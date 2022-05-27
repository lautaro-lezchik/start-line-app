import React from 'react'
import { Link } from 'react-router-dom'

const Filter = () => {
    return (
        <div className='filterContainer'>
            <ul className='filterMenu'>
                <Link to='/shop'>
                    <li>
                        <p>Todos</p>
                    </li>
                </Link>
                <Link to='/category/perros'>
                    <li>
                        <p>Perros</p>
                    </li>
                </Link>
                <Link to='/category/gatos'>
                    <li>
                        <p>Gatos</p>
                    </li>
                </Link>
                <Link to='/category/merch'>
                    <li>
                        <p>Merch</p>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default Filter