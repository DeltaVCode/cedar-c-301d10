import React from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {
  render() {
    const beast = this.props.beast;
    console.log(beast)

    // If we have nothing to show, quit early and show nothing
    // If we don't, beast.title is going to break
    if (!beast) {
      return null;
    }

    return (
      <Modal show={this.props.show}
        onHide={this.props.handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{beast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card
              bg="dark"
              text="light"
              onClick={this.displayAsModal}
            >
              <Card.Img variant="top" alt="" src={beast.image_url} />
              <Card.Body>
                <Card.Title>{beast.title}</Card.Title>
                <Card.Text>
                  {beast.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.handleClose} variant="secondary">Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    )
  }
}

export default SelectedBeast;
