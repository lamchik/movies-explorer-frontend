import '../../fonts/inter-3.13/inter-web/inter.css';
import '../SavedMovies/SavedMovies.css';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {useEffect, useState} from 'react';

function SavedMovies(props) {
  const {likes, setLikes, getMovies, onGetMovies} = props;
  const [search, setSearch] = useState('');
  const [value, setValue] = useState(false)

  function onGetShortMovie () {
    if (!value) {
      setValue(true)
      setLikes(likes.filter(movie => movie.duration <= 40))
    }
    else{
      setValue(false)
      setLikes(JSON.parse(localStorage.getItem('likedMovies')));
    }
  }

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
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onGetMovies(search);
  };


  return (
    <div className="saved-movie">
      <ProfileHeader/>
      <SearchForm
        onSubmit={onSubmit}
        onChange={updateSearch}
        searchValue={search}
        changeValue={onGetShortMovie}
        value={value}
      />
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
