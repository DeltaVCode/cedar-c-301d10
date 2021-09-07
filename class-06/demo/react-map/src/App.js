import React from 'react';
import './App.css';

class App extends React.Component {
  handleSearch = event => {
    // avoid making new GET request
    event.preventDefault();

    let form = event.target;
    let input = form.elements.search;
    let q = input.value;
    console.log(q);
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
      </div>
    );
  }
}

export default App;
