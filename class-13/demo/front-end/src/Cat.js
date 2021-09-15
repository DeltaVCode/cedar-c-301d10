import React from 'react';

export default class Cat extends React.Component {
  render() {
    // Destructure to pull out values from props
    const { cat, onDelete } = this.props;

    return (
      <p>
        <button onClick={() => onDelete(cat._id)}>&times;</button>
        {cat.name} is {cat.color}
      </p>
    )
  }
}