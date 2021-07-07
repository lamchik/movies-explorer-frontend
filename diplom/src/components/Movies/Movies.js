import React, {useEffect} from 'react';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import ButtonElse from '../ButtonElse/ButtonElse';
import '../ProfileHeader/ProfileHeader.css';
import {useState} from 'react';
import Preloader from "../Preloader/Preloader";
import Tooltip from "../../Tooltip/Tooltip";

const filterMovies = (movies, query) => movies.filter((item) => item.nameRU.includes(query));

function Movie(props) {
  const {
    likes,
    setLikes,
    movies,
    setMovies,
    handleLikeMovie,
    onGetMovies,
    preloader,
    tooltip,
    filteredMovies,
    counterClick,
    setCounterClick
  } = props;
  const [value, setValue] = useState(false)
  const [search, setSearch] = useState('');


  function onGetShortMovie() {
    if (!value) {
      setValue(true)
      setMovies(movies.filter(movie => movie.duration <= 40))
    } else {
      setValue(false)
      setMovies(filterMovies(JSON.parse(localStorage.getItem('movies')), ""));
    }
  }


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

  console.log(JSON.parse(localStorage.getItem('movies')))

  function addRowWithMovie(movies) {

    setCounterClick(counterClick + 4)
    const allMovies = JSON.parse(localStorage.getItem('movies'))

    let count = 0
    let quantity = 0
    let a = 0
    if (1280 <= window.screen.width) {
      count = 12
      quantity = 4
      a = count + counterClick
      console.log("a", a)
      let deletedMovies = allMovies.splice(a, quantity)

      movies.push.apply(movies, deletedMovies)

    }
    if (768 <= window.screen.width && window.screen.width < 1280) {
      count = 8
      quantity = 2
      a = count + counterClick
      let deletedMovies = allMovies.splice(a, quantity)
      movies.push.apply(movies, deletedMovies)
    }
    if (320 <= window.screen.width && window.screen.width < 768) {
      count = 5
      quantity = 1
      a = count + counterClick
      let deletedMovies = allMovies.splice(a, quantity)
      movies.push.apply(movies, deletedMovies)

    } else {
    }

  }


  return (
    <div className="movie">
      <ProfileHeader/>
      <SearchForm
        onSubmit={onSubmit}
        onChange={updateSearch}
        searchValue={search}
        value={value}
        changeValue={onGetShortMovie}/>
      <Tooltip
        tooltip={tooltip}
      />
      <Preloader
        preloader={preloader}
      />
      <MoviesCardList
        page="movies"
        filteredMovies={movies}
        onClick={onClick}
        likes={likes}
      />
      <ButtonElse
        handleClick={addRowWithMovie}
        filteredMovies={filteredMovies}
      />
      <Footer/>
    </div>
  );
}

export default Movie;
