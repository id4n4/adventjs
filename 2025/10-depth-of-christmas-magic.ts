/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s: string): number {
  // Code here
  let depth = 0;
  let max = 0;

  for (let c of s) {
    if (c === "[") {
      if (++depth > max) max = depth;
    } else if (c === "]") {
      if (depth === 0) return -1;
      depth--;
    }
  }

  return depth === 0 ? max : -1;
}

maxDepth("[]"); // -> 1
maxDepth("[[]]"); // -> 2
maxDepth("[][]"); // -> 1
maxDepth("[[][]]"); // -> 2
maxDepth("[[[]]]"); // -> 3
maxDepth("[][[]][]"); // -> 2

maxDepth("]["); // -> -1 (cierra antes de abrir)
maxDepth("[[["); // -> -1 (faltan cierres)
maxDepth("[]]]"); // -> -1 (sobran cierres)
maxDepth("[][]["); // -> -1 (queda uno sin cerrar)
