import { useSelector } from "react-redux"

const Cart = () => {
    const cartItems = useSelector((state)=>state.cart)
    console.log(cartItems.name);
    console.log(cartItems);
    return (

        <>
            {cartItems.map ((cartItems)=>{
                return <p>{cartItems.name}</p>
            })}
        </>
    )
    
}

export default Cart