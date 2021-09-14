import React from 'react';

export default class Cat extends React.Component {
  render() {
    // Destructure to pull out values from props
    const { cat } = this.props;

    return (
      <p>
        {cat.name} is {cat.color}
      </p>
    )
  }
}