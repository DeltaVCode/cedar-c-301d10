import React from 'react';

export default class UpdateCat extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    let elements = event.target.elements;
    let formData = {
      name: elements.name.value,
      color: elements.color.value,
    }
    console.log('updating', formData);

    // Which cat to update
    let id = this.props.cat._id
    this.props.onUpdate(id, formData);

    // reset the form
    event.target.reset();
    elements.name.focus();
  }

  render() {
    // More destructuring
    let { cat } = this.props;

    // Defensive coding
    if (!cat) return null;

    return (
      <form method="post" onSubmit={this.handleSubmit}>
        <input placeholder="name" name="name" defaultValue={cat.name} />
        <input placeholder="color" name="color" defaultValue={cat.color} />
        <button type="submit">
          Save!
        </button>
      </form>
    )
  }
}
