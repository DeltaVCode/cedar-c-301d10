import React from 'react';
// Less efficient than import 'react-bootstrap/Navbar'
import { Navbar } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>Author: DV &copy; {new Date().getFullYear()}</Navbar.Brand>
        </Navbar>
      </footer>
    )
  }
}

export default Footer;
