var Sudoku = require('./../js/sudoku.js').sudokuModule;
let newSudoku = new Sudoku();

describe('Sudoku', function(){
  it('should create an array of arrays that is 9 in length and depth', function(){

    let newBoard = newSudoku.sudokuFirstLineCreator();
    expect(newBoard.length).toEqual(9);
    expect(newBoard[0].length).toEqual(9);
  });

  it('should create a completed sudoku board based on random first line', function() {
    let newBoard = newSudoku.sudokuFirstLineCreator();
    newSudoku.sudokuSolverBacktracking(newBoard);

  })
});
//
//
//
// var newSudoku = new Sudoku([[8,2,0,1,5,4,0,9,0],[0,6,5,0,2,7,0,4,0],[0,4,1,0,0,0,7,0,2],
//                             [5,0,0,4,6,0,2,0,1],[4,0,2,0,1,0,6,0,9],[6,0,8,0,0,2,0,3,5],
//                             [0,0,6,0,3,0,0,1,0],[1,0,4,0,9,0,8,0,3],[0,3,0,8,0,1,0,6,0]]);
//
//
// newSudoku.sudokuSolverBacktracking([[3,9,0,4,0,0,1,5,7],[0,0,4,0,1,0,2,0,0],[8,5,0,0,9,7,0,0,4],
//                             [0,7,0,0,0,0,8,0,0],[1,0,0,0,2,0,0,0,6],[0,0,6,0,0,0,0,1,0],
//                             [5,0,0,9,8,0,0,6,1],[0,0,8,0,5,0,9,0,0],[9,1,3,0,0,2,0,7,8]]);
