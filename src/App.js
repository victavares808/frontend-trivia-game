import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Feedbacḱ from './pages/Feedback';
import Login from './pages/Login';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/feedback" component={ Feedbacḱ } />
    </Switch>
  );
}