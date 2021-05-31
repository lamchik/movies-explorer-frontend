import React from 'react';
import Container from '../Container/Container';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Register from "../Register/Register"
import Login from "../Login/Login"
import PageNotFound from "../PageNotFound/PageNotFound"
import Profile from "../Profile/Profile"
import Movie from '../Movies/Movies';



import './App.css';

function App() {
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
            <Movie></Movie>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
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