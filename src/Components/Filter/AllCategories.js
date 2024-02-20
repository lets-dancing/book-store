import Filter from "./Filter";
import './Filter.css';

function AllCategories() {
    return ( 
        <div className="allGenreContainer">
            {['Все категории', 'Триллер', 'Медицина', 'Детектив', 'Драма, мелодрама', 'Стиль', 'Биография', 'Фантастика']
            .map((genre, id) => (
                <Filter key={id} genre={genre}/>
            ))}
        </div>
    );
}
export default AllCategories;