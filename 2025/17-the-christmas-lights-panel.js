/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
  // Code here
  if (!board.length) return false;

  const cols = board[0].length;
  const up = new Array(cols).fill(0); // racha vertical por columna

  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    let left = 0; // racha horizontal

    for (let j = 0; j < cols; j++) {
      const cell = row[j];

      if (cell === ".") {
        left = 0;
        up[j] = 0;
        continue;
      }

      left = j > 0 && row[j - 1] === cell ? left + 1 : 1;
      up[j] = i > 0 && board[i - 1][j] === cell ? up[j] + 1 : 1;

      if (left === 4 || up[j] === 4) return true;
    }
  }

  return false;
}

hasFourLights([
  [".", ".", ".", ".", "."],
  ["R", "R", "R", "R", "."],
  ["G", "G", ".", ".", "."],
]);
// true → there are 4 red lights horizontally

hasFourLights([
  [".", "G", ".", "."],
  [".", "G", ".", "."],
  [".", "G", ".", "."],
  [".", "G", ".", "."],
]);
// true → there are 4 green lights vertically

hasFourLights([
  ["R", "G", "R"],
  ["G", "R", "G"],
  ["G", "R", "G"],
]);
// false → there are no 4 lights of the same color in a row
