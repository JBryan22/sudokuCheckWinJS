var Sudoku = require('./../js/sudoku.js').sudokuModule;

$(document).ready(function(){

  const newSudoku = new Sudoku();
  let newBoard = [];
  let solvedBoard = [];

  $("#generate").click(function(){
    $("input").val('');
    solvedBoard = [];
    $(".cell-input").each(function() {
      $(this).removeClass('invalid');
    });
    newBoard = newSudoku.generateRandomCompleteBoard();

    for (i = 0; i < newBoard.length; i++) {
      solvedBoard.push([]);
      for(k = 0; k < newBoard[i].length; k++) {
        solvedBoard[i].push(newBoard[i][k]);
      }
    }
    console.log(solvedBoard);
    newSudoku.removeRandomFromCompletedBoard(newBoard, 37);

    for (i = 0; i < newBoard.length; i++) {
      for(k = 0; k < newBoard[i].length; k++) {
        if (newBoard[i][k] != 0) {
          $(".cell" + ((i * 9) + k) + " input").val(newBoard[i][k]);
        }
      }
    }
  });

  $("#solve").click(function() {
    for (i = 0; i < solvedBoard.length; i++) {
      for(k = 0; k < solvedBoard[i].length; k++) {
        $(".cell" + ((i * 9) + k) + " input").val(solvedBoard[i][k]);
      }
    }
  });

  $("#hint").click(function() {
    point = [0,0];
    newSudoku.findEmptyPosition(newBoard, point);
    point1 = point[0];
    point2 = point[1];
    console.log(point);
    console.log(solvedBoard);
    $(".cell" + ( (point1 * 9) + point2) + " input").val(solvedBoard[point1][point2]);
    newBoard[point1][point2] = solvedBoard[point1][point2];
  });

  $("input").on('input', function() {
    point = [0,0];




    cell = $(this).parent()[0].className;
    cell = parseInt(cell.replace(/[a-z]/g, ''));
    row = (Math.floor(cell / 9));
    col = cell % 9;
    if (!newSudoku.checkIfValidPosition(newBoard, row, col, $(this).val())) {
      console.log('in here');
      $(this).addClass("invalid");
    } else {
      $(this).removeClass("invalid");
    }

    console.log(hasInvalid());
    console.log(newSudoku.findEmptyPosition(newBoard, point));
    if (!newSudoku.findEmptyPosition(newBoard, point) && !hasInvalid())
    {
      alert('Great Job!');
    }

  });
});

function hasInvalid() {
  hasInv = false;
  $(".cell-input").each(function() {
    if ($(this).hasClass('invalid')) {
      hasInv = true;
    }
  });
  return hasInv;
}
