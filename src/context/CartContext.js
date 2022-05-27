import { createContext, useState } from "react";


export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList]=useState([]);

    const addToCart = (item) => {

            setCartList([
                ...cartList,
                {
                    id: item.id,
                    img: item.image,
                    name: item.name,
                    price: item.price,
                }
            ]);
        }

    return (
        <CartContext.Provider value={
            { 
                cartList, 
                addToCart,
            }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;