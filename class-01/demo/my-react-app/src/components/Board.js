import React from 'react';
import Square from './square';
import './square.css';

export default class Board extends React.Component {
  render() {
    return (
      <div id="board">
        <h2>Board</h2>
        <div class="board-row">
          <Square value={1} />
          <Square value={2} />
          <Square value={3} />
        </div>
        <div class="board-row">
          <Square value={4} />
          <Square value={5} />
          <Square value={6} />
        </div>
        <div class="board-row">
          <Square value={7} ian='lucky' />
          <Square value='8' player='X' />
          <Square value={3 * 3} />
        </div>
      </div>
    );
  }
}