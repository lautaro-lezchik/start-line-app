

const initialState = {
cart:[]
}

const myReducer = (state = initialState, action)=> {

    switch (action.type){
        case "ADD_TO_CART":
            const newProduct=action.payload;
            const isInCart = state.cart.find((product)=>product.id===newProduct.id);//existing product findIndex

            console.log("ya esta en carrito",isInCart);

            let newCart;


                /* newCart = (product.id===newProduct.id )
                        ? isInCart.qty: isInCart.qty + 1
                        : product */
                
            if (isInCart) {
                newCart = state.cart.map ((product)=>{
                    return product.id===newProduct.id 
                        ? {...isInCart, qty: isInCart.qty + 1} 
                        : product
                })
            }

            else newCart = [...state.cart,  {...newProduct, qty:1}] 

            return {
                ...state,
                cart: newCart,
            }

        case "DELETE_PRODUCT":
            const productsArray = state.cart
            let filter = productsArray.filter (item=>item.id!==action.payload);

        return {
            ...state,
            cart: filter,
        }

        default:
            return initialState
    }
    
}

export default myReducer;