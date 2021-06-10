import React from 'react';
import { useState } from 'react'
import './App.css';
import MoviesApi from "../../utils/MoviesApi"
import Container from '../Container/Container';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Movie from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';


function App() {
  const [movies, setMovies] = useState([])

  function setMovieInLocalStorage(item) {
    if(localStorage.getItem === null) {
        localStorage.setItem('movies', item);
    }

   else {
        localStorage.getItem('movies')
   } 
}

  function getInitialMovies() {
      MoviesApi.getMovies().then(res => {
        setMovies(res)
      })
        .catch(err => {
          console.log(err);
        });
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Container></Container>
          </Route>
          <Route path="/signup">
            <Register></Register>
          </Route>
          <Route path="/signin">
            <Login></Login>
          </Route>
          <Route path="/movies">
            <Movie
              onGetMovies={getInitialMovies}
              movies={movies}
            ></Movie>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
          <Route path="/saved-movies">
              <SavedMovies></SavedMovies>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;