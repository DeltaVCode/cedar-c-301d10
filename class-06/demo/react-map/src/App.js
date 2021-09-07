import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {
  // instead of constructor/super
  // assign initial state as class property
  state = {
    q: null,
    location: null,
  };

  handleSearch = async event => {
    // avoid making new GET request
    event.preventDefault();

    let form = event.target;
    let input = form.elements.search;
    let q = input.value;
    console.log(q);

    // assign q in state to be value of q
    this.setState({ q, location: null });

    const url = `https://us1.locationiq.com/v1/search.php`;

    // without await, response would be a Promise of future data
    const response = await axios.get(url, {
      // query string parameters
      params: {
        // get key from environment variables
        key: process.env.REACT_APP_LOCATION_KEY,
        q, // variable already has correct name
        format: 'json',
      }
    });
    console.log(response);

    const location = response.data[0];
    this.setState({ location });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSearch}>
          <label>
            Search for a location:
            {' '} {/* add a space between */}
            <input type="text" name="search" placeholder="Location" />
          </label>
          <div>
            <button type="submit">Search</button>
          </div>
        </form>

        {this.state.q &&
          <>
            <h2>Search: {this.state.q}</h2>
            {this.state.location ?
              <p>Display Name: {this.state.location.display_name}</p>
              : <p>Loading...</p>
            }
          </>
        }
      </div>
    );
  }
}

export default App;
