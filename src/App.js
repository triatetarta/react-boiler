import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <h1>Three Quarters</h1>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
