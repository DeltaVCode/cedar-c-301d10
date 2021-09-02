import React from 'react';
import { Card, Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {
  render() {
    const beast = this.props.beast;
    console.log(beast)

    return (
      <Modal show={this.props.show}
        onHide={this.props.handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{beast.title}</Modal.Title>
          </Modal.Header>
        </Modal.Dialog>
      </Modal>
    )
  }
}

export default SelectedBeast;
