import MoviesCard from "../MoviesCard/MoviesCard";
import data from "../../data.js"
import poster from "../../images/movie.png"
import "../MoviesCardList/MoviesCardList.css"

function MoviesCardList() {
    const items = data.map(movie => (
        <MoviesCard
            nameRU={movie.nameRU}
            url={poster}
            duration={movie.duration}
        />
        ))
        return (
            <div className="movies-list">
                {items}
            </div>
        )
}

export default MoviesCardList