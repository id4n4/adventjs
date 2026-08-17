/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  /* Code here */
  const width = 2 * height - 1;
  const lines = [];

  // Copas del arbol
  for (let i = 0; i < height; i++) {
    const symbols = i * 2 + 1;
    const padding = (width - symbols) / 2;
    const spaces = "_".repeat(padding);
    const line = spaces + ornament.repeat(symbols) + spaces;
    lines.push(line);
  }

  // tronco del arbol
  for (let i = 0; i < 2; i++) {
    const padding = (width - 1) / 2;
    const spaces = "_".repeat(padding);
    const line = spaces + "#" + spaces;
    lines.push(line);
  }
  return lines.join("\n");
}

const tree = createXmasTree(5, "*");
console.log(tree);
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, "+");
console.log(tree2);
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, "@");
console.log(tree3);
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
