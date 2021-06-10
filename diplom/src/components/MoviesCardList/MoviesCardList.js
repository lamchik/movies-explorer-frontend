import MoviesCard from "../MoviesCard/MoviesCard";
import poster from "../../images/movie.png"
import "../MoviesCardList/MoviesCardList.css"
import { useState } from "react";

const movieUrl = "https://api.nomoreparties.co"


function MoviesCardList(props) {
    

    const items = props.filteredMovies.map(movie => (
        // console.log(movie)
        <MoviesCard
            nameRU={movie.nameRU}
            url={movie.image === null ? poster : (movieUrl + movie.image.url)}
            duration={movie.duration}
            page={props.page}
            trailer={movie.trailerLink}
            key={movie.id}
        />
        
        ))
        return (
            <div className="movies-list">
                {items}
            </div>
        )
}

export default MoviesCardList