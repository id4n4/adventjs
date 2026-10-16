function findUnsafeGifts(warehouse: string[]): number {
  // Code here
  const directions = [
    [-1, 0], // arriba
    [1, 0], // abajo
    [0, -1], // izquierda
    [0, 1], // derecha
  ] as const;

  let unsafe = 0;

  for (let row = 0; row < warehouse.length; row++) {
    for (let col = 0; col < warehouse[row].length; col++) {
      if (warehouse[row][col] !== "*") continue;

      const hasCamera = directions.some(
        ([dRow, dCol]) => warehouse[row + dRow]?.[col + dCol] === "#",
      );

      if (!hasCamera) unsafe++;
    }
  }

  return unsafe;
}

findUnsafeGifts([".*.", "*#*", ".*."]); // ➞ 0

// Todos los regalos están junto a una cámara

findUnsafeGifts(["...", ".*.", "..."]); // ➞ 1

// Este regalo no tiene cámaras alrededor

findUnsafeGifts(["*.*", "...", "*#*"]); // ➞ 2
// Los regalos en las esquinas superiores no tienen cámaras alrededor

findUnsafeGifts([".....", ".*.*.", "..#..", ".*.*.", "....."]); // ➞ 4

// Los cuatro regalos no tienen cámaras, porque están en diagonal a la cámara
