import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {
  // instead of constructor/super
  // assign initial state as class property
  state = {
    q: null,
  };

  handleSearch = event => {
    // avoid making new GET request
    event.preventDefault();

    let form = event.target;
    let input = form.elements.search;
    let q = input.value;
    console.log(q);

    // assign q in state to be value of q
    this.setState({ q });

    const url = `https://us1.locationiq.com/v1/search.php?key=pk.3d3f151dd32b59aabcf52d7231919bb3&q=415 12th Ave SE, Cedar Rapids&format=json`;
    const response = axios.get(url);
    console.log(response);
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
          <h2>Search: {this.state.q}</h2>
        }
      </div>
    );
  }
}

export default App;
