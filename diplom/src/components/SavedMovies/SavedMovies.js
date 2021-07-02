import '../../fonts/inter-3.13/inter-web/inter.css';
import '../SavedMovies/SavedMovies.css';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import CurrentUserContext from '../../context/CurrentUserContext';

function SavedMovies(props) {
  function onClick(movie) {
    props.handleDeleteLikeMovie(movie);
  }
  // console.log('filteredMovies', props.filteredMovies);
  // const [localSavedMovies, setLocalSavedMovies] = useState([]);

  // function setSavedMovieInLocalStorage() {
  //   if (localStorage.getItem('saved-movies') === null) {
  //     localStorage.setItem('saved-movies', JSON.stringify(props.likes));
  //   } else {
  //     const localSavedMovies = JSON.parse(localStorage.getItem('saved-movies'));
  //     setLocalSavedMovies(localSavedMovies);
  //   }
  // }

  // useEffect(() => {
  //   setSavedMovieInLocalStorage();
  // }, []);

  return (
    <div className="saved-movie">
      <ProfileHeader></ProfileHeader>
      <SearchForm></SearchForm>
      <MoviesCardList
        page="saved-movies"
        like={props.like}
        likedMovie={props.likedMovie}
        filteredMovies={props.likes}
        likes={props.likes}
        onClick={onClick}
      ></MoviesCardList>

      <Footer></Footer>
    </div>
  );
}

export default SavedMovies;
