import { useSelector } from 'react-redux';
import booksData from '../../data/booksData';
import { getSelectGenre } from '../../redux/booksSlice';
import { getSelectSearchTerm } from '../../redux/searchSlice';
import Book from './Book';

function Books() {
    const selectedGenre = useSelector(getSelectGenre);
    const searchTerm = useSelector(getSelectSearchTerm);

    return ( 
        <div className='booksContainer'>
            {booksData
            .filter(book => {
                if (selectedGenre === "Все категории") return true;
                return book.genre === selectedGenre;
            })
            .filter(book => {
                if (searchTerm === '') return true;
                return book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       book.author.toLowerCase().includes(searchTerm.toLowerCase());
            })
            .map((book, index) => <Book key={index} book={book}/>)
            }
        </div>
    );
}

export default Books;