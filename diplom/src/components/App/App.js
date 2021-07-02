import React from 'react';
import { useState } from 'react';
import './App.css';
import MoviesApi from '../../utils/MoviesApi';
import Container from '../Container/Container';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import Movie from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { authAPI } from '../../utils/MainApi';
import MainApi from '../../utils/MainApi';
import CurrentUserContext from '../../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';
import Main from '../Main/Main';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(null);
  const [movies, setMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [registerError, setIsOk] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  function showError() {
    setIsOk(true);
  }

  const addError = `${registerError ? 'entrance__form-error' : 'entrance__form-error_invisible'}`;

  function setMovieInLocalStorage(item) {
    if (localStorage.getItem === null) {
      localStorage.setItem('movies', item);
    } else {
      localStorage.getItem('movies');
    }
  }

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      setLoggedIn(false);
      return;
    }

    authAPI
      .checkToken(token)
      .then((res) => {
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
      });
  }, [isLoggedIn]);

  React.useEffect(() => {
    MainApi.getUser()
      .then((inisialUser) => {
        setCurrentUser(inisialUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoggedIn]);

  const onLogin = (email, password) => {
    authAPI
      .signIn(email, password)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
      })
      .catch((err) => {
        showError();
        console.log(err);
      });
  };

  const onRegister = (email, password, name) => {
    return authAPI.signUp(email, password, name).catch((err) => {
      showError();
      console.log(err);
    });
  };

  const onSignOut = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  const [likedMovie, setLikedMovie] = useState([]);

  function getInitialMovies() {
    Promise.all([MoviesApi.getMovies(), MainApi.getMovies()])
      .then((res) => {
        setMovies(res[0]);
        setLikedMovie(res[1]);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(object) {
    MainApi.editUser(object.name, object.email)
      .then((user) => {
        setCurrentUser(user);
        setMessage(true);
        setSuccess(true);
      })
      .catch((err) => {
        setMessage(true);
        setSuccess(false);
        console.log(err);
      });
  }

  const likes = likedMovie.filter((item) => item.owner === currentUser._id);
  console.log('likes', likes);
  console.log('ikedMovie', likedMovie);
  const [activeLike, setActivLike] = useState(false);

  function setLikeActive(movie) {
    likedMovie.forEach((element) => {
      if (element.movieId === movie.id) {
        setActivLike(true);
      } else {
        setActivLike(false);
      }
    });
  }

  function checkLike(movie) {
    MainApi.getMovies()
      .then((res) => {
        setLikedMovie(res);
        const isLiked = likes.some((i) => i.movieId === movie.id);
        if (isLiked) {
          likes.forEach((element) => {
            if (element.movieId === movie.id) {
              handleDeleteLikeMovie(element);
            }
          });
        } else {
          handleLikeMovie(movie);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteLikeMovie(movie) {
    MainApi.deleteLike(movie._id)
      .then(() => {
        MainApi.getMovies()
          .then((res) => {
            setLikedMovie(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLikeMovie(movie) {
    MainApi.likeMovie(movie)
      .then(() => {
        MainApi.getMovies()
          .then((res) => {
            setLikedMovie(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <BrowserRouter>
      <div className="App">
        <CurrentUserContext.Provider value={currentUser}>
          {isLoggedIn === null ? (
            <Preloader />
          ) : (
            <Switch>
              <Route exact path="/">
                <Container></Container>
              </Route>
              <Route path="/signup">
                <Register isLoggedIn={isLoggedIn} onRegister={onRegister} addError={addError} onLogin={onLogin} />
              </Route>
              <Route path="/signin">
                <Login isLoggedIn={isLoggedIn} onLogin={onLogin} addError={addError} />
              </Route>
              <ProtectedRoute
                redirectPath="/signin"
                loggedIn={isLoggedIn}
                path="/movies"
                setLoggedIn={setLoggedIn}
                component={Movie}
                onGetMovies={getInitialMovies}
                movies={movies}
                handleLikeMovie={checkLike}
                setLikeActive={setLikeActive}
                likedMovie={likedMovie}
                likes={likes}
              />
              <ProtectedRoute
                redirectPath="/signin"
                loggedIn={isLoggedIn}
                path="/saved-movies"
                setLoggedIn={setLoggedIn}
                component={SavedMovies}
                handleLikeMovie={checkLike}
                handleDeleteLikeMovie={handleDeleteLikeMovie}
                // likeClass={likeClassName}
                likes={likes}
                likedMovie={likedMovie}
              />

              <ProtectedRoute
                redirectPath="/signin"
                loggedIn={isLoggedIn}
                path="/profile"
                setLoggedIn={setLoggedIn}
                component={Profile}
                onSignOut={onSignOut}
                onUpdateUser={handleUpdateUser}
                success={success}
                message={message}
              />

              <Route path="*">
                <PageNotFound></PageNotFound>
              </Route>
            </Switch>
          )}
        </CurrentUserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
