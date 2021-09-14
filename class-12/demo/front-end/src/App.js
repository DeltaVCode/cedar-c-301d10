import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import axios from 'axios';
import Cat from './Cat';
import CreateCat from './CreateCat';

const SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  state = { cats: [] };

  // Run fetch as soon as the component has loaded
  componentDidMount() {
    this.fetchCats();
  }

  async fetchCats() {
    let apiUrl = `${SERVER}/cats`;
    try {
      // TODO: filter by location!
      let results = await axios.get(apiUrl);
      this.setState({ cats: results.data });
    }
    catch (err) {
      console.log(err);
    }
  }

  handleSave = async catInfo => {
    let apiUrl = `${SERVER}/cats`;
    let results = await axios.post(apiUrl, catInfo);
    let newCat = results.data;
    console.log(newCat);

    // Option 1: update state to include our new cat
    this.setState({
      // cats: this.state.cats.concat(newCat)
      cats: [newCat, ...this.state.cats]
    })

    // Option 2: just get them all again!
    this.fetchCats();
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
              <CreateCat onSave={this.handleSave} />
              {this.state.cats.length > 0 &&
                <>
                  <h2>Cats!</h2>
                  {this.state.cats.map(cat => (
                    <Cat
                      key={cat._id}
                      cat={cat}
                    />
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
