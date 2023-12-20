import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";


function Book({book}) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return ( 
        <div>
            <img className='bookImg' src={`./${book.img}.webp`} alt={book.img}></img>
            <h4>{book.name}</h4>
            <p>{book.author}</p>
            <span>₱ {book.price*quantity}</span>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={() => {dispatch(addItemToCart({book, quantity}))}}>Add to cart</button>
        </div>
    );
}

export default Book;