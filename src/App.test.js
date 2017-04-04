import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {boardFromString, moveRowRight} from './boardFunctions;
import {boardFromString, moveRowRight, moveDown, moveUp, moveRight, moveLeft, transpose} from './boardFunctions';

describe('boardFromString', () => {
  it('creates a 2d array with values divided into rows', () => {
    var initialString = '2002022020000002'
    var sideLength = 4
    var correctResult = [
      [2,0,0,2],
      [0,2,2,0],
      [2,0,0,0],
      [0,0,0,2]
    ]
    var actualResult = boardFromString(initialString,sideLength)
    expect(actualResult).toEqual(correctResult);
  });

  describe("moveRowRight", function() {
    it("should be able to initialize a board", function() {
      var row = [0,0,0,0]
      expect(moveRowRight(row)).toEqual([0,0,0,0]);
    });

    it("should sum neighbors", function() {
      var row = [0,0,2,2]
      expect(moveRowRight(row)).toEqual([0,0,0,4]);
    });

    it("should sum nonadjacent neighbors", function() {
      var row = [2,0,0,2]
      expect(moveRowRight(row)).toEqual([0,0,0,4]);
    });

    it("should sum nonadjacent neighbors only if equal", function() {
      var row = [2,0,2,4]
      expect(moveRowRight(row)).toEqual([0,0,4,4]);
    });

    it("should sum multiple different adjacent number pairs", function() {
      var row = [4,2,2,2]
      expect(moveRowRight(row)).toEqual([0,4,2,4]);
    });
  });
  describe("moveDown", function() {
    it("should be able to move board down", function() {
      var board = [
        [2,4,0,2],
        [0,2,4,8],
        [2,4,0,4],
        [0,0,4,2]
      ]
      var correctResult = [
        [0,0,0,2],
        [0,4,0,8],
        [0,2,0,4],
        [4,4,8,2]
      ]
      expect(moveDown(board)).toEqual(correctResult);
    });
  });
  describe("moveUp", function() {
    it("should be able to move board up", function() {
      var board = [
        [2,4,0,2],
        [0,2,4,8],
        [2,4,0,4],
        [0,0,4,2]
      ]
      var correctResult = [
        [4,4,8,2],
        [0,2,0,8],
        [0,4,0,4],
        [0,0,0,2]
      ]
      expect(moveUp(board)).toEqual(correctResult);
    });
  });
  describe("moveRight", function() {
    it("should be able to move board right", function() {
      var board = [
        [2,4,0,2],
        [0,2,4,8],
        [2,4,0,4],
        [0,0,4,2]
      ]
      var correctResult = [
        [0,2,4,2],
        [0,2,4,8],
        [0,0,2,8],
        [0,0,4,2]
      ]
      expect(moveRight(board)).toEqual(correctResult);
    });
  });
  describe("moveLeft", function() {
    it("should be able to move board left", function() {
      var board = [
        [2,4,0,2],
        [0,2,4,8],
        [2,4,0,4],
        [0,0,4,2]
      ]
      var correctResult = [
        [2,4,2,0],
        [2,4,8,0],
        [2,8,0,0],
        [4,2,0,0]
      ]
      expect(moveLeft(board)).toEqual(correctResult);
    });
  });
  describe("addNewNumbers", function() {
    it("should add random 2s or 4s to board", function() {
      var board = [
        [2,4,0,2],
        [0,2,4,8],
        [2,4,0,4],
        [0,0,4,2]
      ]
      var newBoard = addNewNumbers(board)
      var formerlyEmptyCells = [
        newBoard[0][2],
        newBoard[1][0],
        newBoard[2][2],
        newBoard[3][0],
        newBoard[3][1]
      ]

      var newNumbers = formerlyEmptyCells.filter(function(cell) { return cell != 0 })
      var acceptableCellValues = formerlyEmptyCells.filter(function(cell) { return cell == 0 || cell ==2 || cell == 4 })

      expect(newNumbers.length).toEqual(2);
      expect(acceptableCellValues.length).toEqual(formerlyEmptyCells.length);
    });
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App initialValues='0000000000000202'/>, div);
});
