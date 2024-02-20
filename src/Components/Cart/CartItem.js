// Компонент CartItem для отображения информации о товаре в корзине.
// Он позволяет увеличивать и уменьшать количество товара, удалять его из корзины
// и вычислять общую стоимость товара. Также использует функцию declension
// для правильного склонения слова "экземпляр" в зависимости от количества.

import { useDispatch } from "react-redux";
import { removeItemFromCart, increaseQuantity, decreaseQuantity } from "../../redux/cartSlice";
import './Cart.css';

function CartItem({cartItem}) {
    const dispatch = useDispatch();
    const calculatePrice = () => {
        return cartItem.quantity * cartItem.bookPrice;
    }
    // Функция склонения, которая возвращает правильную форму слова в зависимости от числительного
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
            <img className="cartItemCover" src={`./${cartItem.bookImage}.webp`} alt={cartItem.bookImage}></img>
            <h2>{cartItem.bookName}</h2>
            <p>{cartItem.bookAuthor}</p>
            <p>{cartItem.quantity}{declension(cartItem.quantity, [' экземпляр', ' экземпляра', ' экземпляров'])}</p>
            <div className="cart-btn-cont">
                <div>
                    <button onClick={() => {dispatch(decreaseQuantity(cartItem))}}>-</button>
                    <button onClick={() => {dispatch(increaseQuantity(cartItem))}}>+</button>
                </div>
                <p>Стоимость: ₱  {calculatePrice()}</p>
                <img onClick={() => {dispatch(removeItemFromCart(cartItem))}} className="delIcon" src={`./removeIcon.png`} alt="delIcon"/>
            </div>
        </div>
    );
}
export default CartItem;