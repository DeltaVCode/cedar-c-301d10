import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <nav>
            <h1>World of Cats</h1>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            <Route path="/about">
              <h1>About Page Here</h1>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
