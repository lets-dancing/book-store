import { useDispatch, useSelector } from "react-redux";
import { filteredGenre, getSelectGenre } from "../../redux/booksSlice";

function Filter({genre}) {
    const dispatch = useDispatch();
    const selectedGenre = useSelector(getSelectGenre);

    return ( 
        <div className="genreItem">
            <p onClick={() => {dispatch(filteredGenre(genre))}} className={selectedGenre === genre ? "selectedGenre" : "staticGenre"}>{genre}</p>
        </div>
    );
}

export default Filter;