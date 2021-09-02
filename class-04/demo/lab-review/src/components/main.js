import React from 'react';
// again, an inefficient import
import { Button, CardColumns, Container, Form } from 'react-bootstrap';
import HornedBeast from './hornedBeast'

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Start with all beasts
      filteredBeasts: this.props.beasts,
    };
  }

  handleSubmit = (event) => {
    // prevent actually submitting, just like in 201
    event.preventDefault();

    // pull values out of DOM input/select/etc
    let hornCount = parseInt(event.target.elements.hornCount.value);
    console.log(hornCount);

    this.setState({
      filteredBeasts: this.props.beasts.filter(beast => {
        if (hornCount === 0) {
          return true; // include everything
        }

        return beast.horns === hornCount;
      })
    })
  }

  render() {
    let beasts = this.state.filteredBeasts;
    console.log(beasts);

    return (
      <Container as="main" >
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>How many horns?</Form.Label>
            <Form.Control as="select" name="hornCount">
              <option value="0">All</option>
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
