import React from 'react';

export default class Map extends React.Component {
  render() {
    let location = this.props.location;

    return (
      <div id="map">
        <h3>Map of {location.formatted_query}</h3>
        {this.props.src &&
          <img src={this.props.src}
            alt={`Map of ${location.search_query}`} />
        }
      </div>
    )
  }
}