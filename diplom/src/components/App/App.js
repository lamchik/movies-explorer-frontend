import React from 'react';
import Container from '../Container/Container';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container></Container>
      </div>
      <Switch>
        <Route path="/sgin-up">

        </Route>
        <Route path="/sign-in">

        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;