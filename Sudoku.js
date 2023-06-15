let board = [
  [5, 3, ".", ".", 7, ".", ".", ".", 1],
  [6, ".", ".", 1, 9, 5, ".", ".", "."],
  [".", 9, 8, ".", ".", ".", ".", 6, "."],
  [8, ".", ".", ".", 6, ".", ".", ".", 3],
  [4, ".", ".", 8, ".", ".", ".", ".", 1],
  [7, ".", ".", ".", 2, ".", ".", ".", 6],
  [".", 6, ".", ".", ".", ".", 2, 8, "."],
  [1, ".", ".", 4, 1, 9, ".", ".", 5],
  [".", ".", ".", ".", 8, ".", 9, 7, "."],
];

const main = (board) => {
  let checkHor = checkHorizontaly(board);
  let checkVer = checkVerticaly(board);
  let subBoards = checkInSub(board);

  if (checkHor.length || checkVer.length || subBoards.length) {
    return false;
  } else {
    return true;
  }
};

const checkVerticaly = (board) => {
  for (let i = 0; i < 9; i++) {
    let copy = [];
    let repeated = [];
    for (let k = 0; k < 9 - 1; k++) {
      copy.push(board[k][i]);
      let a = board[k + 1][i];
      if (copy.includes(a)) {
        if (board[k + 1][i] != ".") {
          repeated.push(board[k + 1][i]);
        }
      }
    }
    return repeated;
  }
};

const checkHorizontaly = (board) => {
  for (let i = 0; i < 9; i++) {
    let copy = [];
    let repeated = [];
    for (let j = 0; j < 9; j++) {
      copy.push(board[i][j]);
      if (copy.includes(board[i][j + 1])) {
        if (board[i][j + 1] != ".") {
          repeated.push(board[i][j + 1]);
        }
      }
    }
    return repeated;
  }
};

const checkInSub = (main) => {
  let subArrays = [];
  let repeated = [];
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let subArr = [];
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          subArr.push(main[k][l]);
        }
      }
      subArrays.push(subArr);
    }
  }
  for (let i = 0; i < 9; i++) {
    let copy = [];
    for (let j = 0; j < 9; j++) {
      copy.push(subArrays[i][j]);
      if (copy.includes(subArrays[i][j + 1])) {
        if (subArrays[i][j + 1] != ".") {
          repeated.push(subArrays[i][j + 1]);
        }
      }
    }
  }
  return repeated;
};

let final = main(board);

console.log(final);
