import React from 'react'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux"


const CartIcon = () => {
    const cartItems = useSelector((state)=>state.cart)
    let amountOfProducts = cartItems.length

    return (
        <IconButton  aria-label="cart">
            <Badge badgeContent={amountOfProducts} color="secondary">
                <ShoppingCartIcon className='shoppingCartIcon' />
            </Badge> 
        </IconButton>
    )
}

export default CartIcon