/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  const lineIndex = box.findIndex((line) => line.includes("*"));
  const lineWithSymbol = box[lineIndex];
  if (lineWithSymbol) {
    if (lineIndex === 0 || lineIndex === box.length - 1) return false;
    const borderLeft = lineWithSymbol[0] === "#";
    const borderRight = lineWithSymbol[lineWithSymbol.length - 1] === "#";
    return borderLeft && borderRight;
  }
  return false;
}

inBox(["###", "#*#", "###"]); // ➞ true

inBox(["####", "#* #", "#  #", "####"]); // ➞ true

inBox(["#####", "#   #", "#  #*", "#####"]); // ➞ false

inBox(["#####", "#   #", "#   #", "#   #", "#####"]); // ➞ false
