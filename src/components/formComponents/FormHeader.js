import React from 'react'
import { useLocation } from 'react-router-dom';


const FormHeader = ({error}) => {
    const location = useLocation();
    const titulo = (location.pathname==="/login") ? "Accede" : "Crea tu cuenta"

    return (
        <>
        <h2>
            {titulo}
        </h2>
        <div className='formHeaderError'>
            {error &&
            <div className="text-danger ">
                {error}
            </div>}
        </div>
        </>
    )
}

export default FormHeader