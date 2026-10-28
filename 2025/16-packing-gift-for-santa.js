/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */
function packGifts(gifts, maxWeight) {
  // Code here
  let count = 0;
  let load = 0;
  for (let weight of gifts) {
    if (weight > maxWeight) return null;
    if (count === 0 || load + weight > maxWeight) {
      count++;
      load = weight;
    } else {
      load += weight;
    }
  }
  return count;
}

packGifts([3, 3, 3, 3], 5);
packGifts([2, 3, 4, 1], 5);
// 2 trineos
// Trineo 1: 2 + 3 = 5
// Trineo 2: 4 + 1 = 5

packGifts([3, 3, 2, 1], 3);
// 3 trineos
// Trineo 1: 3
// Trineo 2: 3
// Trineo 3: 2 + 1 = 3

packGifts([1, 1, 1, 1], 2);
// 2 trineos
// Trineo 1: 1 + 1 = 2
// Trineo 2: 1 + 1 = 2

packGifts([5, 6, 1], 5);
// null
// Hay un regalo de peso 6 que no cabe

packGifts([], 10);
// 0 trineos
// No hay regalos que entregar
