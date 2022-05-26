import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Feedbacḱ from './pages/Feedback';
import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';
import logo from './trivia.png';

export default function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img
            src={ logo }
            className="App-logo"
            alt="logo"
          />
        </header>
      </div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/feedback" component={ Feedbacḱ } />
        <Route exact path="/game" component={ Game } />
        <Route exact path="/settings" component={ Settings } />
      </Switch>
    </div>
  );
}
