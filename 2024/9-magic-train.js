/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  const DELTAS = {
    U: [-1, 0],
    D: [1, 0],
    R: [0, 1],
    L: [0, -1],
  };
  const delta = DELTAS[mov];

  const rowTrain = board.findIndex((r) => r.includes("@"));
  const columnTrain = board[rowTrain].indexOf("@");

  const destRow = rowTrain + delta[0];
  const destCol = columnTrain + delta[1];

  const valueDestiny = board[destRow]?.[destCol];

  if (valueDestiny === "·") return "none";
  if (valueDestiny === "*") return "eat";
  return "crash";
}

const board = ["·····", "*····", "@····", "o····", "o····"];

console.log(moveTrain(board, "U"));
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, "D"));
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, "L"));
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, "R"));
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
