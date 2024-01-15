import { useDispatch, useSelector } from 'react-redux';
import { getSelectSearchTerm, setSearchTerm } from '../../redux/searchSlice';

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