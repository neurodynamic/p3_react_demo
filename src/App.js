import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        board: this.generateBoard(props.initialValues, props.sideLength)
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <table>
            {this.state.board.map((row, rowIndex) =>
              <tr key={rowIndex}>
                {row.map((cellValue, colIndex) =>
                  <td key={colIndex}>
                    {cellValue}
                  </td>
                )}
              </tr>
            )}
          </table>
      </div>
      </div>
    );
  }
  generateBoard(initialValues, sideLength){
    var board = []
    for (var i = 0; i < sideLength; i++){
      board[i] = []
      for (var j = 0; j < sideLength; j++) {
        var valueIndex = (sideLength * i) + j
        board[i][j] = initialValues[valueIndex]
      }
    }

    return board
  }
}

export default App;
