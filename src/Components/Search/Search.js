// Компонент Search для поиска в каталоге. Использует Redux для управления состоянием поискового запроса.
import { useDispatch, useSelector } from 'react-redux';
import { getSelectSearchTerm, setSearchTerm } from '../../redux/searchSlice';
import './Search.css';

function Search() {
    const searchTerm = useSelector(getSelectSearchTerm);
    const dispatch = useDispatch();
    return (
        <div className='searchInput'>
            <input
                type="text"
                placeholder="Искать в каталоге..."
                value={searchTerm}
                onChange={(e) => {
                    dispatch(setSearchTerm(e.target.value));
                }}
            />
        </div>
    );
}

export default Search;