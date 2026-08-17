/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  const stack = [];
  let current = "";

  for (const char of packages) {
    if (char === "(") {
      stack.push(current);
      current = "";
    } else if (char === ")") {
      current = [...current].reverse().join("");
      current = stack.pop() + current;
    } else {
      current += char;
    }
  }

  return current;
}

fixPackages("a(cb)de");
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages("a(bc(def)g)h");
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages("abc(def(gh)i)jk");
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages("a(b(c))e");
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"
