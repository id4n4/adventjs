/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {
  const counts = {};

  // contar botas izquierda y derecha por talla
  for (let { type, size } of shoes) {
    if (!counts[size]) counts[size] = { I: 0, R: 0 };
    counts[size][type]++;
  }

  // por cada talla, el número de pares es el minimo entre I y R
  const result = [];
  for (const size in counts) {
    const pares = Math.min(counts[size].I, counts[size].R);
    for (let i = 0; i < pares; i++) {
      result.push(Number(size));
    }
  }

  return result;
}

const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

organizeShoes(shoes);
// [38, 42]

const shoes2 = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
];
// [38, 38]

const shoes3 = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
];

organizeShoes(shoes3);
// []
