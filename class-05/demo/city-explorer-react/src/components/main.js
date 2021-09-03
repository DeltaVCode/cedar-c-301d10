import React from 'react';
import fakeLocation from '../fake-data/location.json';
import Map from './map';
import mapLink from '../fake-data/map.png';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: null,
      location: null,
      mapSrc: null,
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
      location: fakeLocation,
      // mapSrc: mapLink,
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
            Searched location is {this.state.search}.
            <Map
              location={this.state.location}
              src={this.state.mapSrc}
            />
          </div>
        }
      </main>
    )
  }
}

export default Main;
