import React from 'react';
import Container from '../Container/Container';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Register from "../Register/Register"
import Login from "../Login/Login"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Container></Container>
        </Route>
      </div>
        <Route path="/signup">
          <Register></Register>
        </Route>
        <Route path="/signin">
          <Login></Login>

        </Route>
    </BrowserRouter>

  );
}

export default App;