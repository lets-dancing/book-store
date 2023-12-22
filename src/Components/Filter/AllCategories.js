import Filter from "./Filter";

function AllCategories() {
    return ( 
        <div className="allGenreContainer">
            {['Все категории', 'Триллер', 'Медицина', 'Детектив', 'Драма, мелодрама', 'Стиль', 'Биография', 'Фантастика']
            .map((genre, index) => (
                <Filter key={index} genre={genre}/>
            ))}
        </div>
    );
}

export default AllCategories;