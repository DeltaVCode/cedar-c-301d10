import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import axios from 'axios';

class App extends React.Component {
  state = { cats: [] };

  // Run fetch as soon as the component has loaded
  componentDidMount() {
    this.fetchCats();
  }

  async fetchCats() {
    let apiUrl = `${process.env.REACT_APP_SERVER}/cats`;
    try {
      // TODO: filter by location!
      let results = await axios.get(apiUrl);
      this.setState({ cats: results.data });
    }
    catch (err) {
      console.log(err);
    }
  }

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
            <Route path="/help">
              <h1>Help me!</h1>
            </Route>
            <Route>
              <h1>Not Found!</h1>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
