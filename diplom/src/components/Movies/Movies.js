import React, {useEffect} from 'react';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import ButtonElse from '../ButtonElse/ButtonElse';
import '../ProfileHeader/ProfileHeader.css';
import {useState} from 'react';

const filterMovies = (movies, query) => movies.filter((item) => item.nameRU.includes(query));

function Movie(props) {
  const {likes, setLikes, movies, setMovies, handleLikeMovie, onGetMovies} = props;

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (localStorage.getItem('movies') !== null) {
      setMovies(filterMovies(JSON.parse(localStorage.getItem('movies')), ""));
    }

    if (localStorage.getItem('likedMovies') !== null) {
      setLikes(JSON.parse(localStorage.getItem('likedMovies')));
    }
  }, [setLikes, setMovies]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onGetMovies(search);
  };

  function onClick(movie) {
    handleLikeMovie(movie);
    console.log(movie);
  }

  return (
    <div className="movie">
      <ProfileHeader/>
      <SearchForm onSubmit={onSubmit} onChange={updateSearch} searchValue={search}/>
      <MoviesCardList
        page="movies"
        filteredMovies={movies}
        onClick={onClick}
        likes={likes}
      />
      <ButtonElse/>
      <Footer/>
    </div>
  );
}

export default Movie;
