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
import LoginButton from './LoginButton';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

const SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  state = { cats: null };

  // Run fetch when component updates (e.g. from auth)
  // instead of componentDidMount
  // KEITH MESSED UP THE DEMO STRUCTURE
  componentDidUpdate() {
    // Load cats if we haven't
    if (!this.state.cats)
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

  handleUpdate = async (catId, catInfo) => {
    let apiUrl = `${SERVER}/cats/${catId}`;
    await axios.put(apiUrl, catInfo);

    // Option 1: figure out how to put update into state

    // Option 2: just get them all again!
    await this.fetchCats();
  }

  handleDelete = async catId => {
    let apiUrl = `${SERVER}/cats/${catId}`;
    await axios.delete(apiUrl);

    // Option 1: get them all again
    // this.fetchCats();

    // Option 2: remove the given Cat from state
    // If you pass setState a function,
    // that function receives the current state.
    // More complex, but more technically correct than this.state.
    this.setState(state => ({
      // Filter out the deleted cat
      cats: state.cats.filter(cat => cat._id !== catId)
    }));
  }

  render() {
    // Destructuring to grab auth0 from props
    const { auth0 } = this.props;
    console.log('auth0 in App', auth0);

    return (
      <>
        <Router>
          <nav>
            <h1>World of Cats</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {auth0.isLoading
              ? <p>Spinner</p>
              : auth0.isAuthenticated
                ? (
                  <>
                    Welcome back, {auth0.user.nickname}
                    <LogoutButton />
                  </>
                )
                : <LoginButton />
            }
          </nav>
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
              <CreateCat onSave={this.handleSave} />
              {this.state.cats && this.state.cats.length > 0 &&
                <>
                  <h2>Cats!</h2>
                  {this.state.cats.map(cat => (
                    <Cat
                      key={cat._id}
                      cat={cat}
                      onDelete={this.handleDelete}
                      onUpdate={this.handleUpdate}
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

// Wrap App before export in a "higher order component (HOC)"
// that will give us props.auth0
export default withAuth0(App);
