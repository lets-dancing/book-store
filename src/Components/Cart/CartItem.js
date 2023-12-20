import { useDispatch } from "react-redux";
import { removeItemFromCart, increaseQuantity, decreaseQuantity } from "../../redux/cartSlice";


function CartItem({cartItem}) {
    const dispatch = useDispatch();
    const calculatePrice = () => {
        return cartItem.quantity * cartItem.bookPrice;
    }

    function declension(n, text_forms) {  
        n = Math.abs(n) % 100; 
        let n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 === 1) { return text_forms[0]; }
        return text_forms[2];
    };
    
    return ( 
        <div className="cartItem">
            <h2>{cartItem.bookName}</h2>
            <p>{cartItem.quantity}{declension(cartItem.quantity, [' экземпляр', ' экземпляра', ' экземпляров'])}</p>
            <div>
                <button onClick={() => {dispatch(decreaseQuantity(cartItem))}}>-</button>
                <button onClick={() => {dispatch(increaseQuantity(cartItem))}}>+</button>
            </div>
            <p>Стоимость: ₱  {calculatePrice()}</p>
            <img onClick={() => {dispatch(removeItemFromCart(cartItem))}} className="delIcon" src={`./removeIcon.png`} alt="delIcon"/>
        </div>
    );
}

export default CartItem;