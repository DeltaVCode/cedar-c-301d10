import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Gallery of Horns!</Navbar.Brand>
        </Navbar>
      </Container>
    )
  }
}

export default Header;
