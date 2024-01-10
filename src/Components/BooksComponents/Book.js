import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import { showDetails } from "../../redux/booksSlice";
import { Link } from "react-router-dom";


function Book({book}) {
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();

    function showBookDetails() {
        dispatch(showDetails({book}));
    }
    function toggleFavorite() {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className="booksItem">
            <img 
            className="heartIcon" 
            src={isFavorite ? `./redheart.png` : `./heart.png`}
            onClick={toggleFavorite}
            alt="heartIcon"
            />
        <div onClick={showBookDetails}>
            <Link to="/bookDetails">
                <img className='bookImg' src={`./${book.img}.webp`} alt={book.img}></img>
            </Link>
            <h4 style={{fontSize: book.name.length > 65 ? '15px' : '20px'}}>{book.name}</h4>
            <p>{book.author}</p>
            <p>{book.favorite}</p>
            <div className="btn-cont">
                <span className="bookPrice">₱ {book.price*quantity}</span>
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                <button onClick={() => {dispatch(addItemToCart({book, quantity}))}}>в корзину</button>
            </div>
        </div>
        </div>
    );
}

export default Book;