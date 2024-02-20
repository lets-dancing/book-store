// Компонент BookDetails для отображения детальной информации о выбранной книге.
// Использует хук useSelector для доступа к состоянию Redux и получения данных выбранной книги.
import { useSelector } from 'react-redux';
import { getSelectedBook } from '../../redux/booksSlice';
import './BooksComponents.css';

function BookDetails() {
  const selectedBook = useSelector(getSelectedBook);
  return (
    <div className="bookDetails" >
      <div className='bookDetailsHeader'>
        <img src={`./${selectedBook.img}.webp`} alt={selectedBook.img} />
        <h1>{selectedBook.name}</h1>
        <p>Автор: {selectedBook.author}</p>
        <p>Цена: {selectedBook.price}₱</p>
      </div>
      <div>
        <p>Описание:<br/> {selectedBook.description}</p>
      </div>
    </div>
  );
}

export default BookDetails;