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
  }

  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit}>
        <input placeholder="name" name="name" />
        <input placeholder="color" name="color" />
        <button type="submit">
          Save!
        </button>
      </form>
    )
  }
}
