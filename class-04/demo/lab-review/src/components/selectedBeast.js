import React from 'react';
import { Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.show}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Test!</Modal.Title>
          </Modal.Header>
        </Modal.Dialog>
      </Modal>
    )
  }
}

export default SelectedBeast;
