import React from 'react';
import {useState} from 'react';
import './App.css';
import MoviesApi from '../../utils/MoviesApi';
import Container from '../Container/Container';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import Movie from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import {authAPI} from '../../utils/MainApi';
import MainApi from '../../utils/MainApi';
import CurrentUserContext from '../../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const filterMovies = (movies, query) => movies.filter((item) => item.nameRU.includes(query));

function App() {
  const [isLoggedIn, setLoggedIn] = useState(null);
  const [movies, setMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [registerError, setIsOk] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  const [likedMovies, setLikedMovies] = useState([]);
  const [preloader, setPreloader] = useState(false)
  const [tooltip, setTooltip] = useState(false)

  function showError() {
    setIsOk(true);
  }

  const addError = `${registerError ? 'entrance__form-error' : 'entrance__form-error_invisible'}`;

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
      .then((initialUser) => {
        setCurrentUser(initialUser);
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


  function getSavedMovies() {
    MainApi.getMovies().then(res => {
      localStorage.setItem('likedMovies', JSON.stringify(res));
      setLikedMovies(res);
    })
  }

  function getInitialMovies(search) {
    setPreloader(true)
    Promise.all([MoviesApi.getMovies(), MainApi.getMovies()])
      .then((res) => {
        setPreloader(false)
        const [movies, likedMovies] = res;

        const filteredMovies = filterMovies(movies, search);
        setMovies(filteredMovies);
        setLikedMovies(likedMovies);

        if (filteredMovies.length === 0) {
          setTooltip(true)
        } else {
          setTooltip(false)
        }

        localStorage.setItem('movies', JSON.stringify(filterMovies(movies, search)));
        // localStorage.setItem('movies', JSON.stringify(filterMovies(movies, search)));
        localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log('movies', movies)


  function searchSavedMovies(search) {
    setLikedMovies(filterMovies(likedMovies, search))

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

  const likes = likedMovies.filter((likedMovie) => likedMovie.owner === currentUser._id);

  function handleLikeClick(movie) {
    const likedMovies = likes.filter((i) => i.movieId === movie.id);
    let promise;
    if (likedMovies.length > 0) {
      // MainApi.deleteLike returns promise for every movie, so map will return array of promises.
      // This array of promises will be passed to Promise.all and saved in promise variable.
      promise = Promise.all(likedMovies.map(likedMovie => MainApi.deleteLike(likedMovie._id)))
    } else {
      promise = MainApi.likeMovie(movie)
    }

    promise.then(() => {
      return MainApi.getMovies().then(res => {
        setLikedMovies(res)
        localStorage.setItem('likedMovies', JSON.stringify(res));
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  function handleDeleteMovie(movie) {
    MainApi.deleteLike(movie._id).then(() => {
      MainApi.getMovies().then(res => {
        setLikedMovies(res)
        localStorage.setItem('likedMovies', JSON.stringify(res));
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <BrowserRouter>
      <div className="App">
        <CurrentUserContext.Provider value={currentUser}>
          {isLoggedIn === null ? (
            <Preloader/>
          ) : (
            <Switch>
              <Route exact path="/">
                <Container
                  isLoggedIn={isLoggedIn}
                />
              </Route>
              <Route path="/signup">
                <Register isLoggedIn={isLoggedIn} onRegister={onRegister} addError={addError} onLogin={onLogin}/>
              </Route>
              <Route path="/signin">
                <Login isLoggedIn={isLoggedIn} onLogin={onLogin} addError={addError}/>
              </Route>
              <ProtectedRoute
                redirectPath="/signin"
                loggedIn={isLoggedIn}
                path="/movies"
                setLoggedIn={setLoggedIn}
                component={Movie}
                onGetMovies={getInitialMovies}
                movies={movies}
                setMovies={setMovies}

                likes={likes}
                setLikes={setLikedMovies}
                handleLikeMovie={handleLikeClick}
                preloader={preloader}
                tooltip={tooltip}
              />
              <ProtectedRoute
                redirectPath="/signin"
                loggedIn={isLoggedIn}
                path="/saved-movies"
                setLoggedIn={setLoggedIn}
                component={SavedMovies}
                handleLikeMovie={handleLikeClick}
                handleDeleteLikeMovie={handleDeleteMovie}
                likes={likes}
                setLikes={setLikedMovies}
                getMovies={getSavedMovies}
                onGetMovies={searchSavedMovies}
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
                <PageNotFound/>
              </Route>
            </Switch>
          )}
        </CurrentUserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
