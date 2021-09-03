import React from 'react';

class Main extends React.Component {
  handleLocationSearch = submitEvent => {
    submitEvent.preventDefault();

    console.log('submitted!', submitEvent.target);
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleLocationSearch}>
          <label>
            Search for a location:
            {' '} {/* add a space between */}
            <input type="text" name="search" placeholder="Location" />
          </label>
          <div>
            <button type="submit">Search</button>
          </div>
        </form>
      </main>
    )
  }
}

export default Main;
