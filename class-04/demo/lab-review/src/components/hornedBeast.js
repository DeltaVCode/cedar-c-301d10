import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;
