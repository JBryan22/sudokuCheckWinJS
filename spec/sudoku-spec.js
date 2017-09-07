var Sudoku = require('./../js/sudoku.js').sudokuModule;

describe('Sudoku', function(){
  it('should check whether a row of board is legal', function(){
    var newSudoku = new Sudoku([[8,2,7,1,5,4,3,9,6],[9,6,5,3,2,7,1,4,8],[3,4,1,6,8,9,7,5,2],
                                [5,9,3,4,6,8,2,7,1],[4,7,2,5,1,3,6,8,9],[6,1,8,9,7,2,4,3,5],
                                [7,8,6,2,3,5,9,1,4],[1,5,4,7,9,6,8,2,3],[2,3,9,8,4,1,5,6,7]]);


    expect(newSudoku.checkWin()).toEqual(true);
  })

  it('should check whether all row of board are legal', function(){
    var newSudoku = new Sudoku([[8,2,7,1,5,4,3,9,6],[9,6,5,3,2,7,1,4,8],[3,4,1,6,8,9,7,5,2],
                                [5,9,3,4,6,8,2,7,1],[4,7,2,5,1,3,6,8,9],[6,1,8,9,7,2,4,3,5],
                                [7,8,6,2,3,5,9,1,4],[1,5,4,7,9,6,8,2,3],[2,3,9,8,4,1,5,6,7]]);

    expect(newSudoku.checkWin()).toEqual(true);
  })

  it('should check whether a column of board is legal', function(){
    var newSudoku = new Sudoku([[8,2,7,1,5,4,3,9,6],[9,6,5,3,2,7,1,4,8],[3,4,1,6,8,9,7,5,2],
                                [5,9,3,4,6,8,2,7,1],[4,7,2,5,1,3,6,8,9],[6,1,8,9,7,2,4,3,5],
                                [7,8,6,2,3,5,9,1,4],[1,5,4,7,9,6,8,2,3],[2,3,9,8,4,1,5,6,7]]);

    expect(newSudoku.checkWin()).toEqual(true);
  })
});


var newSudoku = new Sudoku([[8,2,0,1,5,4,0,9,0],[0,6,5,0,2,7,0,4,0],[0,4,1,0,0,0,7,0,2],
                            [5,0,0,4,6,0,2,0,1],[4,0,2,0,1,0,6,0,9],[6,0,8,0,0,2,0,3,5],
                            [0,0,6,0,3,0,0,1,0],[1,0,4,0,9,0,8,0,3],[0,3,0,8,0,1,0,6,0]]);

var newSudoku = new Sudoku();

newSudoku.sudokuSolverBacktracking([[3,9,0,4,0,0,1,5,7],[0,0,4,0,1,0,2,0,0],[8,5,0,0,9,7,0,0,4],
                            [0,7,0,0,0,0,8,0,0],[1,0,0,0,2,0,0,0,6],[0,0,6,0,0,0,0,1,0],
                            [5,0,0,9,8,0,0,6,1],[0,0,8,0,5,0,9,0,0],[9,1,3,0,0,2,0,7,8]]);
