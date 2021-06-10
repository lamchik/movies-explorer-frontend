import "../MoviesCard/MoviesCard.css"
import "../../fonts/inter-3.13/inter-web/inter.css"
import { useState } from 'react'
import poster from "../../images/movie.png"




function MoviesCard(props) {
    const [isLikeMovie, setLikeMenu] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    function likeMenu() {
        setLikeMenu(true)
    }

    const likeClassName = (
        `${isLikeMovie ? 'card__like_active' : ''}`
    )

    const isPageMovie = (
        `${props.page === 'movies' ? 'card__like' : 'card__close'}`
    )



    // function visibleClose()  {
    //     setIsVisible(true)
    // }

    // const classNameActive = (
    //     `${isVisible ? '' : 'card__close-wrap_invisible'}`
    // )
    const isPageSavedMovie = (
        `${props.page !== 'movies' ? 'card__close-wrap' : 'card__like-wrap'}`
    )

   



    return(
        <div className="card">
            <div className="card__image">
                <a className="card__image-img" href={props.trailer} target="blank" ><img className="card__image-img" src={props.url} alt="постер фильма"/></a>
                <div className="card__image-like-wrap">
                    <p className="card__image-text">{props.nameRU}</p>
                    <div className={`${isPageSavedMovie}`} >
                        <button className={`${isPageMovie} ${likeClassName}`} onClick={likeMenu}></button>
                    </div>
                    
                </div>
            </div>
            <hr className="card__time-line portfolio__line"></hr>
            <p className="card__time-text">{props.duration}</p>
        </div>
    )
}

export default MoviesCard