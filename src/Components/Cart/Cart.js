import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

function Cart() {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return ( 
        <div>
            <img className="cartIcon" src={`./cart.png`} alt="cartIcon"/> 
            <h3>ИТОГО: {totalPrice} ₱</h3>
            {cartItems.map((cartItem, index) => <CartItem key={index} cartItem={cartItem}/>)}
            
        </div>
    );
}

export default Cart;