import '../MoviesCard/MoviesCard.css';
import '../../fonts/inter-3.13/inter-web/inter.css';
import { useEffect, useState } from 'react';
import poster from '../../images/movie.png';
const movieUrl = 'https://api.nomoreparties.co';

function Movie(props) {
  const {movie, likes, page, onClick} = props;

  function getTimeFromMinutes(minutes) {
    let hours = Math.trunc(minutes / 60);
    let fullMinutes = minutes % 60;
    return hours + 'ч ' + fullMinutes + 'м';
  }
  

  const duration = getTimeFromMinutes(movie.duration);
  const [isVisible, setIsVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  function showPoster() {
    if (movie.image) {
      setImageUrl(movie.image.url === undefined ? movie.image : movieUrl + movie.image.url);
    } else {
      setImageUrl(poster)
    }
  }

  useEffect(() => {
    showPoster();
  });

  const isPageMovie = `${page === 'movies' ? 'card__like' : 'card__close'}`;

  function visibleButton() {
    setIsVisible(true);
  }

  const classNameActive = `${isVisible ? '' : 'card__close-like-wrap_invisible'}`;
  const isPageSavedMovie = `${page !== 'movies' ? 'card__close-wrap' : 'card__like-wrap'}`;
  const likeClass = likes.filter((element) => element.movieId === movie.id).length !== 0 ? 'card__like_active' : ''

  function handleLikeMovie() {
    onClick(movie);
  }

  return (
    <div className="card" onMouseOver={visibleButton}>
      <div className="card__image">
        <a className="card__image-img" href={movie.trailer} target="blank">
          <img className="card__image-img" src={imageUrl} alt="постер фильма" />
        </a>
        <div className="card__image-like-wrap">
          <p className="card__image-text">{movie.nameRU}</p>
          <div className={`${isPageSavedMovie} ${classNameActive}`}>
            <button className={`${isPageMovie} ${likeClass}`} onClick={handleLikeMovie}/>
          </div>
        </div>
      </div>
      <hr className="card__time-line portfolio__line"/>
      <p className="card__time-text">{duration}</p>
    </div>
  );
}

export default Movie;
