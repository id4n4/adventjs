function createFrame(names) {
  const maxLength = names.reduce((total, name) => {
    return name.length > total ? name.length : total;
  }, 0);
  const yAxis = "*".repeat(maxLength + 4);
  let result = yAxis;
  names.forEach((name) => {
    result += "\n* " + name + " ".repeat(yAxis.length - name.length - 3) + "*";
  });
  result += "\n" + yAxis;

  return result;
}

createFrame(["midu", "madeval", "educalvolpz"]);

/* Resultado esperado:
 ***************
 * midu        *
 * madeval     *
 * educalvolpz *
 ***************
 */

createFrame(["midu"]);

/* Resultado esperado:
 ********
 * midu *
 ********
 */

createFrame(["a", "bb", "ccc"]);

/* Resultado esperado:
 *******
 * a   *
 * bb  *
 * ccc *
 *******
 */

createFrame(["a", "bb", "ccc", "dddd"]);
