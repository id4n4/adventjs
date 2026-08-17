/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  let result = "";

  // recorrer la posición de los renos
  for (let i = 1; i <= indices.length; i++) {
    result += i !== 1 ? "\n" : "";
    result += " ".repeat(indices.length - i);
    const position = indices[i - 1];
    if (position === 0) result += "~".repeat(length);
    else {
      const line =
        position > 0
          ? "~".repeat(position) + "r" + "~".repeat(length - position - 1)
          : "~".repeat(length + position) + "r" + "~".repeat(position * -1 - 1);
      result += line;
    }

    result += " /" + i;
  }
  return result;
}

drawRace([0, 5, -3], 10);
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

drawRace([2, -1, 0, 5], 8);
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

drawRace([3, 7, -2], 12);
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/
