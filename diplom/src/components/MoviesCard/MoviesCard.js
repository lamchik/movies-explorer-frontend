import "../MoviesCard/MoviesCard.css"
import "../../fonts/inter-3.13/inter-web/inter.css"

function MoviesCard(props) {
    return(
        <div className="card">
            <div className="card__image">
                <img className="card__image-img" src={props.url} alt="постер фильма"/>
                <div className="card__image-like-wrap">
                    <p className="card__image-text">{props.nameRU}</p>
                    <div className="card__like-wrap">
                        <button className="card__like  card__like_active"></button>
                    </div>
                    
                </div>
            </div>
            <hr className="card__time-line portfolio__line"></hr>
            <p className="card__time-text">{props.duration}</p>
        </div>
    )
}

export default MoviesCard