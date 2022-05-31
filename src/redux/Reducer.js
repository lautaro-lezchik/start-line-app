

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
        return {
/*             ...state,
            cart:action.payload */
            ...state,
            cart: [...state.cart,  action.payload] ,

        }

        default:
            return initialState
    }
    
}

export default myReducer;