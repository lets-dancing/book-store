import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Stripe from "../../Stripe/StripeContainer";

function Cart() {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);
    const isAuthenticated = useAuth0()?.isAuthenticated;

    return ( 
        <div className="cartField">
            <Link to="/"><h4>в каталог</h4></Link>
            <h1>Корзина</h1>
            {totalPrice === 0 ? <h3>Корзина пуста</h3> : <h3>ИТОГО: {totalPrice} ₱</h3>}
            <div className="paymentField">
            {!isAuthenticated && <h4>Для оплаты необходимо авторизоваться</h4>}
                {isAuthenticated && totalPrice > 0 && !showCheckoutForm &&
                    <button onClick={() => setShowCheckoutForm(true)}>Оплатить</button>
                }
                {showCheckoutForm && <Stripe totalPrice={totalPrice} setShowCheckoutForm={setShowCheckoutForm}/>}
            </div>
            <div className="cartItems">
                {cartItems.map((cartItem, index) => <CartItem key={index} cartItem={cartItem}/>)}
            </div>
        </div>
    );
}

export default Cart;