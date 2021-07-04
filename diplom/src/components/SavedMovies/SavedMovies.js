import '../../fonts/inter-3.13/inter-web/inter.css';
import '../SavedMovies/SavedMovies.css';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {useEffect} from 'react';

function SavedMovies(props) {
  const {likes, setLikes, getMovies} = props;

  useEffect(() => {
    if (localStorage.getItem('likedMovies') !== null) {
      setLikes(JSON.parse(localStorage.getItem('likedMovies')));
    } else {
      getMovies()
    }
  }, []);

  function onClick(movie) {
    props.handleDeleteLikeMovie(movie)
  }

  return (
    <div className="saved-movie">
      <ProfileHeader/>
      <SearchForm/>
      <MoviesCardList
        page="saved-movies"
        filteredMovies={likes}
        likes={likes}
        onClick={onClick}
      />

      <Footer/>
    </div>
  );
}

export default SavedMovies;
