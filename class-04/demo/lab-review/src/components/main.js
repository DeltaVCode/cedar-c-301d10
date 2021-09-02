import React from 'react';
// again, an inefficient import
import { Button, CardColumns, Container, Form } from 'react-bootstrap';
import HornedBeast from './hornedBeast'

export default class Main extends React.Component {
  handleSubmit = (event) => {
    // prevent actually submitting, just like in 201
    event.preventDefault();

    console.log(event.target.elements.hornCount.value);
  }

  render() {
    let beasts = this.props.beasts;
    console.log(beasts);

    return (
      <Container as="main">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>How many horns?</Form.Label>
            <Form.Control as="select" name="hornCount">
              <option value="">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Button type="submit">Filter</Button>
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
