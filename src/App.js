import { useSelector } from 'react-redux';
import './App.css';
import Books from './Components/BooksComponents/Books';
import AllCategories from './Components/Filter/AllCategories';
import Search from './Components/Search/Search';
import { getSelectSearchTerm } from './redux/searchSlice';
import Cart from './Components/Cart/Cart';

function App() {
  const searchTerm = useSelector(getSelectSearchTerm);

  return (
    <div className='App'>
      <div>
        <Search />
        <AllCategories />
        <Books searchTerm={searchTerm} />
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
}

export default App;
