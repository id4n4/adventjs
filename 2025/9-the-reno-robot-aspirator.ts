type Board = string;
type Moves = string;
type Result = "fail" | "crash" | "success";

function moveReno(board: Board, moves: Moves): Result {
  const rows = board.slice(1, -1).split("\n");
  let row = rows.findIndex((r) => r.includes("@"));
  let col = rows[row].indexOf("@");

  for (let m of moves) {
    const opts: Record<string, [number, number]> = {
      U: [row - 1, col],
      D: [row + 1, col],
      R: [row, col + 1],
      L: [row, col - 1],
    };
    if (!opts[m]) return "fail";
    const [newRow, newCol] = opts[m];

    if (newRow < 0 || newRow >= rows.length) return "crash";
    if (newCol < 0 || newCol >= rows[0].length) return "crash";

    const nextMove = rows[newRow][newCol];

    if (nextMove === "*") return "success";
    if (nextMove === "#") return "crash";

    row = newRow;
    col = newCol;
  }
  return "fail";
}

const board = `
.....
.*#.*
.@...
.....
`;

moveReno(board, "D");
// ➞ 'fail' -> se mueve pero no recoge nada

moveReno(board, "U");
// ➞ 'success' -> recoge algo (*) justo encima

moveReno(board, "RU");
// ➞ 'crash' -> choca contra un obstáculo (#)

moveReno(board, "RRRUU");
// ➞ 'success' -> recoge algo (*)

moveReno(board, "DD");
// ➞ 'crash' -> se choca con la parte de abajo del tablero

moveReno(board, "UUU");
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

moveReno(board, "RR");
// ➞ 'fail' -> se mueve pero no recoge nada
