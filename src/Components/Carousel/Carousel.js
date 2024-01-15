import ReactSimplyCarousel from 'react-simply-carousel';
import booksData from '../../data/booksData';
import { useEffect, useState } from 'react';
import { showDetails } from '../../redux/booksSlice';
import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import BookDetails from '../BooksComponents/BookDetails';

function Carousel() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const carouselItems = booksData.filter(book => book.status === 'best');
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    function showModal(book) {
        setIsOpen(true);
        dispatch(showDetails(book));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlideIndex(prevIndex =>
                prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);
        return () => clearInterval(interval);
    }, [carouselItems.length]);

    return (
        <div className='carouselContainer'>
            <h1>Бестселлеры</h1>
            {isOpen &&
                <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
                    <BookDetails setIsOpen={setIsOpen} isOpen={isOpen} />
                </Modal>}
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                containerProps={{
                    style: {
                        width: "100%",
                        justifyContent: "space-between",
                        userSelect: "none"
                    }
                }}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    children: ``,
                    className: "carouselBtnR",
                    style: {
                        backgroundImage: `url(./arrowR.png)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "#f7f7f7",
                        border: 0,
                        width: 80,
                        height: 80,
                        marginRight: '50px',
                        minWidth: 80,
                        alignSelf: "center"
                    }
                }}
                backwardBtnProps={{
                    children: ``,
                    className: "carouselBtnL",
                    style: {
                        backgroundImage: `url(./arrowL.png)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "#f7f7f7",
                        border: 0,
                        marginLeft: '50px',
                        width: 80,
                        height: 80,
                        minWidth: 80,
                        alignSelf: "center",
                    }
                }}
                dotsNav={{
                    show: true,
                    itemBtnProps: {
                        style: {
                            marginTop: 10,
                            marginLeft: 10,
                            height: 16,
                            width: 16,
                            borderRadius: "50%",
                            border: 0
                        }
                    },
                    activeItemBtnProps: {
                        style: {
                            marginTop: 10,
                            marginLeft: 10,
                            height: 18,
                            width: 18,
                            borderRadius: "50%",
                            border: 0,
                            background: "rgba(119, 170, 119)"
                        }
                    }
                }}
                speed={400}
                centerMode
            >
                {carouselItems
                    .map((book, index) => (
                        <div key={index} className="carouselItem">
                            <div className="carouselImg">
                                <img onClick={() => showModal(book)} src={`./${book.img}.webp`} alt={book.img} />
                            </div>
                            <div className="carouselTitle">
                                <h1>{book.name}</h1>
                                <h4>{book.author}</h4>
                            </div>
                        </div>
                ))}
            </ReactSimplyCarousel>
        </div>
    );
}

export default Carousel;