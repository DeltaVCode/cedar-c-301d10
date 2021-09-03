import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
  render() {
    let bg = 'dark';
    if (this.props.theme === 'light') {
      bg = 'secondary';
    }

    return (
      <Container>
        <Navbar bg={bg} variant={this.props.theme}>
          <Navbar.Brand>Gallery of Horns!</Navbar.Brand>
        </Navbar>
      </Container>
    )
  }
}

export default Header;
