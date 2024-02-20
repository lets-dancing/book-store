// Компонент Book представляет собой элемент книги, который позволяет пользователю изменять количество,
// добавлять книгу в корзину, отмечать как избранное и просматривать подробную информацию о книге в модальном окне.
import { useEffect, useRef, useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import BookDetails from "./BookDetails";
import Modal from "../Modal/Modal";
import { showDetails } from "../../redux/booksSlice";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BooksComponents.css';

gsap.registerPlugin(ScrollTrigger);

function Book({book}) {
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(book.favorite);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    
    // Анимация
    const bookRef = useRef();
    useEffect(() => {
        gsap.fromTo(bookRef.current, {opacity: 0}, {opacity: 1, duration: 1,
            scrollTrigger: {
            trigger: bookRef.current,
            start: "top 100%",
            end: "bottom 70%",
            toggleActions: "restart none none none",
        }});
    }, []);

    // Функция для отображения модального окна и отправки деталей книги в хранилище
    function showModal() {
        setIsOpen(true);
        dispatch(showDetails({...book, favorite: isFavorite}));
    }

    // Переключает состояние избранного (добавляет или удаляет из избранных)
    useEffect(() => {
        setIsFavorite(book.favorite);
    }, [book.favorite]);

    // Функция для переключения состояния избранного
    function toggleFavorite() {
        setIsFavorite(!isFavorite);
        book.favorite = !isFavorite;
    }

    return (
        <div className="booksItem" ref={bookRef}>
            <img
            className="heartIcon"
            src={isFavorite ? `./redheart.png` : `./heart.png`}
            onClick={toggleFavorite}
            alt="heartIcon"
            />
        <div>
            {isOpen &&
            <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
                <BookDetails setIsOpen={setIsOpen} isOpen={isOpen} />
            </Modal>}
            <img onClick={showModal} className='bookImg' src={`./${book.img}.webp`} alt={book.img}/>
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