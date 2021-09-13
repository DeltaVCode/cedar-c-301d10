import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends React.Component {
  state = { cats: [] };

  render() {
    return (
      <>
        <Router>
          <nav>
            <h1>World of Cats</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
              {this.state.cats.length > 0 &&
                <>
                  <h2>Cats!</h2>
                  {this.state.cats.map(cat => (
                    <p key={cat._id}>{cat.name}</p>
                  ))}
                </>
              }
            </Route>
            <Route path="/about">
              <h1>About Page Here</h1>
              <p>I am Keith</p>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
