import { useSelector } from 'react-redux';
import { getSelectedBook } from '../../redux/booksSlice';
import { Link } from 'react-router-dom';


function BookDetails() {
  const selectedBook = useSelector(getSelectedBook);
  
  return (
    <div className="bookDetails">
      <Link to="/"><h4>в каталог</h4></Link>
      <img src={`./${selectedBook.img}.webp`} alt={selectedBook.img} />
      <h1>{selectedBook.name}</h1>
      <p>Автор: {selectedBook.author}</p>
      <p>Цена: {selectedBook.price}₱</p>
      <p>Описание: {selectedBook.description}</p>
    </div>
  );
}

export default BookDetails;