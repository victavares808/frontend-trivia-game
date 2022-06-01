import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './css/App.css';
import { connect, useSelector } from 'react-redux';
import Feedbacḱ from './pages/Feedback';
import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';
// import logo from './trivia.png';
import Ranking from './pages/Ranking';

function App() {
  const BGColor = useSelector((state) => state.settings.backgroundColor);
  return (
    <div className={ BGColor }>
      <div className="cube">
        <div className="top" />
        <div>
          <span style={ { '--side': 0 } }>
            <p>
              T
            </p>
          </span>
          <span style={ { '--side': 1 } }>
            <p>
              R
            </p>
          </span>
          <span style={ { '--side': 2 } }>
            <p>
              I
            </p>
          </span>
          <span style={ { '--side': 3 } }>
            <p>
              V
            </p>
          </span>
          <span style={ { '--side': 4 } }>
            <p>
              I
            </p>
          </span>
          <span style={ { '--side': 5 } }>
            <p>
              A
            </p>
          </span>
        </div>
        {/* <header className="App-header"> */}
        {/* <img
            src={ logo }
            className="App-logo"
            alt="logo"
          /> */}

        {/* </header> */}
      </div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/feedback" component={ Feedbacḱ } />
        <Route exact path="/game" component={ Game } />
        <Route exact path="/settings" component={ Settings } />
        <Route exact path="/ranking" component={ Ranking } />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  backgroundColor: state.settings.backgroundColor,
});

export default connect(mapStateToProps)(App);
