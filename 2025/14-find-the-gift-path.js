/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  // Code here
  const queue = [[workshop, []]];
  let i = 0;

  while (i < queue.length) {
    const [node, path] = queue[i++];

    for (const key in node) {
      const value = node[key];
      const newPath = [...path, key];

      if (value === gift) return newPath;
      if (value !== null && typeof value === "object") {
        queue.push([value, newPath]);
      }
    }
  }

  return [];
}

const workshop = {
  storage: {
    shelf: {
      box1: "train",
      box2: "switch",
    },
    box: "car",
  },
  gift: "doll",
};

findGiftPath(workshop, "train");
// ➜ ['storage', 'shelf', 'box1']

//findGiftPath(workshop, 'switch')
// ➜ ['storage', 'shelf', 'box2']

//findGiftPath(workshop, 'car')
// ➜ ['storage', 'box']

//findGiftPath(workshop, 'doll')
// ➜ ['gift']

//findGiftPath(workshop, 'plane')
// ➜ []
