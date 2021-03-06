import React from 'react';
import './App.css';
import Header from './Components/Header';
import TinderCards from './Components/TinderCards';
import SwipeButtons from './Components/SwipeButtons';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am a chat page </h1>
          </Route>
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
