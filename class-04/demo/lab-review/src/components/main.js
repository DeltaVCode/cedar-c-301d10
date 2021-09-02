import React from 'react';
// again, an inefficient import
import { CardColumns } from 'react-bootstrap';
import HornedBeast from './hornedBeast'

export default class Main extends React.Component {
  render() {
    let beasts = this.props.beasts;
    console.log(beasts);

    return (
      <CardColumns>
        <HornedBeast title="Beasty" />
        <HornedBeast title="Beauty" />
      </CardColumns>
    )
  }
}
