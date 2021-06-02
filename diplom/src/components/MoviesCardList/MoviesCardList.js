import MoviesCard from "../MoviesCard/MoviesCard";
import data from "../../data.js"
import poster from "../../images/movie.png"
import "../MoviesCardList/MoviesCardList.css"

function MoviesCardList(props) {
    console.log(props)
    const items = data.map(movie => (
        <MoviesCard
            nameRU={movie.nameRU}
            url={poster}
            duration={movie.duration}
            page={props.page}
        />
        ))
        return (
            
            <div className="movies-list">
                {items}
            </div>
        )
}

export default MoviesCardList