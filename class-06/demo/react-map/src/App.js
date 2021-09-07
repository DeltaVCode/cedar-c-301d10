import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <form>
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
