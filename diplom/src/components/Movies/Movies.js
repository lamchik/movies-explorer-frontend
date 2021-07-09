import React, {useEffect} from 'react';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import ButtonMore from '../ButtonElse/ButtonElse';
import '../ProfileHeader/ProfileHeader.css';
import {useState} from 'react';
import Preloader from "../Preloader/Preloader";
import Tooltip from "../../Tooltip/Tooltip";

const getDefaultCountAndQuantityForMoreButton = () => {
  if (1280 <= window.screen.width) {
    return {defaultCount: 12, quantityForMore: 4}
  } else if (768 <= window.screen.width && window.screen.width < 1280) {
    return {defaultCount: 8, quantityForMore: 2}
  } else {
    return {defaultCount: 5, quantityForMore: 1}
  }
}

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
  } = props;

  const [showShortMovies, setShowShortMovies] = useState(false)
  const [search, setSearch] = useState('');
  const [timesMoreButtonPressed, setTimesMoreButtonPressed] = useState(0)

  useEffect(() => {
    if (localStorage.getItem('likedMovies') !== null) {
      setLikes(JSON.parse(localStorage.getItem('likedMovies')));
    }
  }, [setLikes, setMovies]);

  function toggleShowShortMovies() {
    setShowShortMovies(!showShortMovies)
  }
  const filteredMovies = showShortMovies ? movies.filter(movie => movie.duration <= 40) : movies

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onGetMovies(search);
  };

  function onClick(movie) {
    handleLikeMovie(movie);
  }

  const {defaultCount, quantityForMore} = getDefaultCountAndQuantityForMoreButton()

  const onMoreButtonClick = () => {
    setTimesMoreButtonPressed(timesMoreButtonPressed+1)
  }

  const moviesToRender =  filteredMovies.slice(0, defaultCount + timesMoreButtonPressed*quantityForMore)
  return (
    <div className="movie">
      <ProfileHeader/>
      <SearchForm
        onSubmit={onSubmit}
        onChange={updateSearch}
        searchValue={search}
        value={showShortMovies}
        changeValue={toggleShowShortMovies}/>
      <Tooltip
        tooltip={tooltip}
      />
      <Preloader
        preloader={preloader}
      />
      <MoviesCardList
        page="movies"
        filteredMovies={moviesToRender}
        onClick={onClick}
        likes={likes}
      />
      <ButtonMore
        handleClick={onMoreButtonClick}
        show={moviesToRender.length < filteredMovies.length}
      />
      <Footer/>
    </div>
  );
}

export default Movie;
