import React, { Component } from 'react';
import logo from './logo.svg';
import Mousetrap from 'mousetrap';
import './App.css';
import {boardFromString, moveDown, moveUp, moveRight, moveLeft} from './boardFunctions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        board: boardFromString(props.initialValues)
    };
  }
  componentDidMount() {
    Mousetrap.bind(['up'], this.handleUp);
    Mousetrap.bind(['down'], this.handleDown);
    Mousetrap.bind(['left'], this.handleLeft);
    Mousetrap.bind(['right'], this.handleRight);
  }
  componentWillUnmount() {
    Mousetrap.unbind(['up'], this.handleUp);
    Mousetrap.unbind(['down'], this.handleDown);
    Mousetrap.unbind(['left'], this.handleLeft);
    Mousetrap.unbind(['right'], this.handleRight);
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
            <tbody>
              {this.state.board.map((row, rowIndex) =>
                <tr key={rowIndex}>
                  {row.map((cellValue, colIndex) =>
                    <td key={colIndex}>
                      {cellValue}
                    </td>
                  )}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  handleUp = () => {
    this.setState({ board: moveUp(this.state.board) })
  }
  handleDown = () => {
    this.setState({ board: moveDown(this.state.board) })
  }
  handleLeft = () => {
    this.setState({ board: moveLeft(this.state.board) })
  }
  handleRight = () => {
    this.setState({ board: moveRight(this.state.board) })
  }
}

export default App;
