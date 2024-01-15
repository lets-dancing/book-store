// Этот компонент React используется для отображения жанра в качестве фильтра. 
// При клике на жанр он диспатчит действие для фильтрации книг по выбранному жанру.
// Компонент также подсвечивает выбранный жанр, используя соответствующий CSS класс.
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