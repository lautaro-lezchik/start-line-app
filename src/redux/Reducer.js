

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
            const newCart = [...state.cart,  action.payload]
        return {
/*             ...state,
            cart:action.payload */
/*             ...state,
            cart: [...state.cart,  action.payload] , */
            ...state,
            cart: newCart,
        }

        case "DELETE_PRODUCT":
            const productsArray = state.cart
            let filter = productsArray.filter (item=>item.id!==action.payload);
            console.log(filter);

        return {
            ...state,
            cart: filter,
        }

        default:
            return initialState
    }
    
}

export default myReducer;