import React from 'react';
// again, an inefficient import
import { CardColumns, Container, Form } from 'react-bootstrap';
import HornedBeast from './hornedBeast'

export default class Main extends React.Component {
  render() {
    let beasts = this.props.beasts;
    console.log(beasts);

    return (
      <Container as="main">
        <CardColumns>
          {beasts.map((beast, i) => (
            <HornedBeast
              key={i}
              beastIndex={i}
              displayModalForIndex={this.props.handleSelectBeast}
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
            />
          ))}
        </CardColumns>
      </Container>
    )
  }
}
