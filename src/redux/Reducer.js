

const initialState = {
cart:[]
}

const myReducer = (state = initialState, action)=> {
    console.log(state);
    console.log(action.type);
    console.log(action.payload);
    console.log(action.type.typeof);
    console.log(state.cart.length);

    switch (action.type){
        case "ADD_TO_CART":
            const newProduct=action.payload;
            const isInCart = state.cart.find((product)=>product.id===newProduct.id);
            console.log("ya esta en carrito",isInCart);

            const newItem = isInCart!==undefined
            ? { ...newProduct, qty: newProduct.qty + 1 }
            : newProduct

            console.log("newItem",newItem);

            const newCart = [...state.cart,  newItem]
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