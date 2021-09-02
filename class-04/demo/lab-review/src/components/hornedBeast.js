import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: 0,
    };
  }

  // have to use an arrow function here
  handleCardClick = () => {
    let currentFavorites = this.state.favorites;
    this.setState({ favorites: currentFavorites + 1 });
  }

  render() {
    return (
      <Card
        onClick={this.handleCardClick}
      >
        <Card.Body>
          <Card.Img variant="top" src={this.props.imageUrl}
          />
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>❤️ = {this.state.favorites}</Card.Text>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;
