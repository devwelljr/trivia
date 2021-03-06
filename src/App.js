import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Game from './pages/Game';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/trivia" component={ Login } />
        <Route path="/trivia/game" component={ Game } />
        <Route path="/trivia/feedback" component={ Feedback } />
      </Switch>
    </div>
  );
}
