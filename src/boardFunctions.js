export function boardFromString(string) {
  var board = []

  for (var i = 0; i < 4; i++) {
    board[i] = []
    for (var j = 0; j < 4; j++) {
      board[i][j] = parseInt(string[(i*4)+j])
    }
  }

  return board
}

export function moveDown(board) {
  var transposedBoard = transpose(board)
  var newBoard = []

  transposedBoard.forEach(function(row){
    var movedRow = moveRowRight(row)
    newBoard.push(movedRow)
  })

  return transpose(newBoard)
}

export function moveUp(board) {
  var transposedBoard = transpose(board)
  var newBoard = []

  transposedBoard.forEach(function(row){
    var reversedRow = row.reverse()
    var movedRow = moveRowRight(reversedRow)
    var finishedRow = movedRow.reverse()
    newBoard.push(finishedRow)
  })

  return transpose(newBoard)
}
export function moveRight(board) {
  var newBoard = []

  board.forEach(function(row){
    var movedRow = moveRowRight(row)
    newBoard.push(movedRow)
  })

  return newBoard
}
export function moveLeft(board) {
  var newBoard = []

  board.forEach(function(row){
    var reversedRow = row.reverse()
    var movedRow = moveRowRight(reversedRow)
    var finalRow = movedRow.reverse()
    newBoard.push(finalRow)
  })

  return newBoard
}

export function transpose(board) {
  var newBoard = [[],[],[],[]]

  for(var i = 0; i < 4; i++){
    for(var j = 0; j < 4; j++){
      newBoard[i][j] = board[j][i]
    }
  }

  return newBoard
}

export function reverseRows(board) {
  return board.map(function(row){ return row.reverse() })
}

export function moveRowRight(row){
  var cleanRow = row.filter(function(item){ return item != 0})
  var summedRow = addAdjacentCells(cleanRow)

  return addZeroes(summedRow)
}

export function addAdjacentCells(row){
  for (var i = row.length - 1; i >= 0; i--) {
    if (row[i] == row[i - 1]){
      row[i - 1] = row[i] + row[i - 1]
      row[i] = 0
      i--
    }
  }
  return row
}

export function addZeroes(row){
  var cleanRow = row.filter(function(item){ return item != 0})
  var zeroesToAdd = 4 - cleanRow.length

  for (var i = 0; i < zeroesToAdd; i++) {
    cleanRow = [0].concat(cleanRow)
  }

  return cleanRow
}
