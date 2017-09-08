function Sudoku() {
}

  Sudoku.prototype.existsInRow = function(board, row, num) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] == num) {
        return true;
      }
    }
  };

  Sudoku.prototype.existsInColumn = function(board, col, num) {
    for (let i = 0; i < 9; i++) {
      if (board[i][col] == num) {
        return true;
      }
    }
  };

  Sudoku.prototype.existsInBox = function(board, row, col, num) {
    for (let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        if (board[i + row][j + col] == num) {
          return true;
        }
      }
    }
  };

  Sudoku.prototype.checkIfValidPosition = function(board, row, col, num) {
    return (!this.existsInRow(board, row, num) && !this.existsInColumn(board, col,num) && !this.existsInBox(board, row - row%3,col - col%3,num));
  };

  Sudoku.prototype.findEmptyPosition = function(board, point) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] == 0) {
          point[0] = row;
          point[1] = col;
          return true;
          //possible scoping issue with l
        }
      }
    }
    return false;
  };

  Sudoku.prototype.sudokuSolverBacktracking = function(board) {
    let point = [0,0];

    if (!this.findEmptyPosition(board, point)) {
      return true;
    }

    let row = point[0];
    let col = point[1];

    for (let num = 1; num < 10; num++) {

      if (this.checkIfValidPosition(board,row,col,num)) {

        board[row][col] = num;

        if (this.sudokuSolverBacktracking(board)) {
          return true;
        }

        board[row][col] = 0;
      }

    }
    return false;
  };

  Sudoku.prototype.generateRandomCompleteBoard = function() {
    let newBoard = [];

      let numbers = [1,2,3,4,5,6,7,8,9];
      let currentIndex = 9, temporaryValue, randomIndex;

      while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = numbers[currentIndex];
            numbers[currentIndex] = numbers[randomIndex];
            numbers[randomIndex] = temporaryValue;
          }

      newBoard.push([]);
      for(j = 0; j < 9; j++) {
        newBoard[0].push(numbers[j]);
      }

      for (i = 1; i < 9; i++) {
        newBoard.push([0,0,0,0,0,0,0,0,0]);
      }

      let newSudoku = new Sudoku();
      let firstLine = newBoard[0];
      newSudoku.sudokuSolverBacktracking(newBoard);
      if (!arraysEqual(firstLine, newBoard[0])) {
        newSudoku.generateRandomCompleteBoard();
      }

    return newBoard;
  }

  Sudoku.prototype.removeRandomFromCompletedBoard = function(completeBoard, amount) {
    let point = [0, 0];
    let counter = 0;
    while (counter < amount) {
      point[0] = Math.floor(Math.random() * 9);
      point[1] = Math.floor(Math.random() * 9);
      if (completeBoard[point[0]][point[1]] != 0) {
        completeBoard[point[0]][point[1]] = 0;
        counter++;
      }
    }
  }

  function arraysEqual(arr1, arr2) {
    for(let k = 0; k < arr1.length; k++) {
      if(arr1[k] !== arr2[k]) {
        return false;
      }
    }
    return true;
  }

// Sudoku.prototype.checkWin = function() {
//   //ROW CHECKER
//   for (var x = 0; x < board.length; x++) {
//     var uniques = [];
//     for (var i = 0; i < board[x].length; i++) {
//       if (uniques.includes(board[x][i])) {
//         return false;
//       }
//       else {
//         uniques.push(board[x][i]);
//       }
//     }
//   }
//
//   //COLUMN CHECKER
//   for (x = 0; x < board.length; x++) { // columns
//     uniques = [];
//     for (i = 0; i < board.length; i++) { // rows
//       if (uniques.includes(board[i][x])) {
//         return false;
//       }
//       else {
//         uniques.push(board[i][x]);
//       }
//     }
//   }
//
// //BOX CHECKER
//   for(var box = 0; box < board.length; box++)
//   {
//     uniques = [];
//     for(var row = Math.floor((box / 3)) * 3, stopAtRow = row + 3; row < stopAtRow; row++)
//     {
//       for(var col = (box % 3) * 3, stopAt = col + 3; col < stopAt; col++)
//       {
//         if(uniques.includes(board[row][col]))
//         {
//           return false;
//         }
//         else
//         {
//           uniques.push(board[row][col]);
//         }
//       }
//     }
//   }
//   return true;
// }

exports.sudokuModule = Sudoku;
