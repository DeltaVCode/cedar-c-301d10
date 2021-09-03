import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: null,
    };
  }

  handleLocationSearch = submitEvent => {
    submitEvent.preventDefault();

    console.log('submitted!', submitEvent.target);
    let form = submitEvent.target;
    let input = form.elements.search;
    let search = input.value; // value from the form
    this.setState({
      // search: search,
      search,
    });
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

        {this.state.search && /* if we have search, show div */
          <div>
            Searched location is {this.state.search}
          </div>
        }
      </main>
    )
  }
}

export default Main;
