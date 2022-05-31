import CartItemList from "../components/CartItemList";
import PurchaseTotal from "../components/PurchaseTotal";

const Cart = () => {
    return (

        <>
            <CartItemList />
            <PurchaseTotal/>
            {/* {cartItems.map ((cartItems)=>{
                return <p>{cartItems.name}</p>
            })} */}
        </>
    )
    
}

export default Cart