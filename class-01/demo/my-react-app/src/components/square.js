import React from 'react';

export default class Square extends React.Component {
  render() {
    console.log(this.props.ian);

    return (
      <button class="square-button">
        {this.props.value}
      </button>
    )
  }
}
