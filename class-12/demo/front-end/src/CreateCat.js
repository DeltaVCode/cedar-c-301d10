import React from 'react';

export default class CreateCat extends React.Component {
  render() {
    return (
      <form method="post">
        <input placeholder="name" name="name" />
        <input placeholder="color" name="color" />
        <button type="submit">
          Save!
        </button>
      </form>
    )
  }
}
