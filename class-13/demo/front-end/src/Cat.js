import React from 'react';
import UpdateCat from './UpdateCat';

export default class Cat extends React.Component {
  state = { update: false };

  handleUpdate = async (id, catInfo) => {
    // Turn off Edit for this Cat
    this.setState({ update: false });

    // Do parent action from props
    await this.props.onUpdate(id, catInfo);
  }

  render() {
    // Destructure to pull out values from props
    const { cat, onDelete } = this.props;

    return (
      <div>
        <button onClick={() => onDelete(cat._id)}>&times;</button>
        {this.state.update
          ? (
            <>
              <UpdateCat cat={cat} onUpdate={this.handleUpdate} />
              <button onClick={() => this.setState({ update: false })}>Cancel</button>
            </>
          )
          : (
            <>
              {cat.name} is {cat.color}
              <button onClick={() => this.setState({ update: true })}>Edit</button>
            </>
          )
        }
      </div>
    )
  }
}