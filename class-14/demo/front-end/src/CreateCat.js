import React from 'react';

export default class CreateCat extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    let elements = event.target.elements;
    let formData = {
      name: elements.name.value,
      color: elements.color.value,
    }
    console.log('saving', formData);

    this.props.onSave(formData);
    // reset the form
    event.target.reset();
    elements.name.focus();
  }

  render() {
    const { show, onCancel } = this.props;
    // Don't show anything if we were told not to
    if (!show) return null;
    // Or <Modal show={show} onHide={onCancel}>...</Modal>

    return (
      <form method="post" onSubmit={this.handleSubmit}>
        <input placeholder="name" name="name" />
        <input placeholder="color" name="color" />
        <button type="submit">
          Save!
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    )
  }
}
