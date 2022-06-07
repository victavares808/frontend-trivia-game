import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './css/App.css';
import { connect, useSelector } from 'react-redux';
import Feedbacḱ from './pages/Feedback';
import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';
import Ranking from './pages/Ranking';
import Cube from './components/Cube';

function App() {
  const BGColor = useSelector((state) => state.settings.backgroundColor);
  return (
    <body>
      <div className={ BGColor }>
        <Cube />
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/feedback" component={ Feedbacḱ } />
          <Route exact path="/game" component={ Game } />
          <Route exact path="/settings" component={ Settings } />
          <Route exact path="/ranking" component={ Ranking } />
        </Switch>
      </div>
    </body>
  );
}

const mapStateToProps = (state) => ({
  backgroundColor: state.settings.backgroundColor,
});

export default connect(mapStateToProps)(App);
