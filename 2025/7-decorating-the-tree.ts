function drawTree(height: number, ornament: string, frequency: number): string {
  // Code here
  const trunk = " ".repeat(height - 1) + "#";
  const level = [];
  let width = 1;
  let counter = 1;

  for (let i = height - 1; i >= 0; i--) {
    const spaces = " ".repeat(i);
    let row = Array.from({ length: width }, (_, j) => {
      let isOrnament = counter % frequency === 0;
      counter++;
      return isOrnament ? ornament : "*";
    }).join("");
    level.push(spaces + row);
    width += 2;
  }
  level.push(trunk);

  return level.join("\n");
}

drawTree(5, "o", 2);
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

drawTree(3, "@", 3);
//   *
//  *@*
// *@**@
//   #

drawTree(4, "+", 1);
//    +
//   +++
//  +++++
// +++++++
//    #
