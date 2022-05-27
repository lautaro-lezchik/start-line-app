import React, { useContext } from 'react'
import LoginContext from '../context/LoginContext';

const Cart = () => {
    const {cartList} = useContext(LoginContext);
    console.log({cartList});

    return (
        <>
        {/*  bringContext.cartList.map(item=>
            <p>{item.id}</p>
        ) */}
        </>
    )
    
}

export default Cart