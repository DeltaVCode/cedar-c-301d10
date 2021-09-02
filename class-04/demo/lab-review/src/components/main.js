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
        <Form>
          <Form.Group>
            <Form.Label>How many horns?</Form.Label>
            <Form.Control as="select">
              <option value="">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
          </Form.Group>
        </Form>
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
