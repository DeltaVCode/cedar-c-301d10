import React from 'react';
import Square from './square';
import './square.css';

export default class Board extends React.Component {
  render() {
    return (
      <div id="board">
        <h2>Board</h2>
        <div class="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div class="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div class="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    );
  }
}