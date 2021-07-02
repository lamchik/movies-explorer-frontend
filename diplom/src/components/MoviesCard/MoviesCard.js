import '../MoviesCard/MoviesCard.css';
import '../../fonts/inter-3.13/inter-web/inter.css';
import { useEffect, useState } from 'react';
import MainApi from '../../utils/MainApi';
import poster from '../../images/movie.png';
const movieUrl = 'https://api.nomoreparties.co';

function MoviesCard(props) {
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  }

  const duration = getTimeFromMins(props.movie.duration);
  const [isVisible, setIsVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  function showPoster() {
    if (props.movie.image.url === undefined) {
      setImageUrl(props.movie.image);
    } else {
      const url = props.movie.image === null ? poster : movieUrl + props.movie.image.url;
      setImageUrl(url);
    }
  }

  useEffect(() => {
    showPoster();
    kfld();
  });

  const isPageMovie = `${props.page === 'movies' ? 'card__like' : 'card__close'}`;

  function visibleButton() {
    setIsVisible(true);
  }

  const classNameActive = `${isVisible ? '' : 'card__close-like-wrap_invisible'}`;

  const isPageSavedMovie = `${props.page !== 'movies' ? 'card__close-wrap' : 'card__like-wrap'}`;

  //   console.log('props.movie', props.movie);

  //   console.log(lilkeActiveFilms);
  //   lilkeActiveFilms.forEach((element) => {
  //     likeClass = 'card__like_active';
  //   });
  const [likeClass, setLikeClass] = useState('');
  let likeActiveFilms = props.likes.filter((element) => element.movieId === props.movie.id);
  //   let likeClass = '';
  function kfld() {
    if (likeActiveFilms.length !== 0) {
      setLikeClass('card__like_active');
    } else {
      setLikeClass('');
    }
  }
  //   likeClass = 'card__like_active';

  //   console.log('setLikeClassActive', likeClass);

  //   useEffect(() => {
  //     console.log('useEffect', props.movie);
  //   });

  //   const likeClass = `${props.activeLike ? 'card__like_active' : ''}`;

  function handleLikeMovie() {
    props.onClick(props.movie);
    kfld();
    // setLikeClassActive(props.movie);
  }

  return (
    <div className="card" onMouseOver={visibleButton}>
      <div className="card__image">
        <a className="card__image-img" href={props.movie.trailer} target="blank">
          <img className="card__image-img" src={imageUrl} alt="постер фильма" />
        </a>
        <div className="card__image-like-wrap">
          <p className="card__image-text">{props.movie.nameRU}</p>
          <div className={`${isPageSavedMovie} ${classNameActive}`}>
            <button className={`${isPageMovie} ${likeClass}`} onClick={handleLikeMovie}></button>
          </div>
        </div>
      </div>
      <hr className="card__time-line portfolio__line"></hr>
      <p className="card__time-text">{duration}</p>
    </div>
  );
}

export default MoviesCard;
