import React from 'react';
import Header from '../Header/Header';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
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