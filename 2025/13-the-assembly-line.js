/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
  // Code here
  const MOVES = {
    "<": [0, -1],
    ">": [0, 1],
    "^": [-1, 0],
    v: [1, 0],
  };
  let x = 0;
  let y = 0;
  const positions = new Set();
  positions.add("0,0");

  while (factory[x]?.[y]) {
    let key = factory[x][y];
    if (key === ".") return "completed";
    x += MOVES[key][0];
    y += MOVES[key][1];
    key = `${x},${y}`;
    if (positions.has(key)) return "loop";
    positions.add(key);
  }

  return "broken";
}

runFactory([">>."]); // 'completed'

runFactory([">>>"]); // 'broken'

runFactory([">><"]); // 'loop'

runFactory([">>v", "..<"]); // 'completed'

runFactory([">>v", "<<<"]); // 'broken'

runFactory([">v.", "^.."]); // 'completed'

runFactory(["v.", "^."]); // 'loop'
