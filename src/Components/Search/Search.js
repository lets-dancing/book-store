import { useDispatch, useSelector } from 'react-redux';
import { getSelectSearchTerm, setSearchTerm } from '../../redux/searchSlice';


function Search() {
    const searchTerm = useSelector(getSelectSearchTerm);
    const dispatch = useDispatch();
    
    return (
        <div>
        <input
            type="text"
            placeholder="Введите название или автора..."
            value={searchTerm}
            onChange={(e) => {
                dispatch(setSearchTerm(e.target.value));
            }}
        />
        </div>
    );
}

export default Search;