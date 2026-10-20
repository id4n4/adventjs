/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
  const DAMAGE = {
    A: { A: 1, B: 0, F: 1 },
    B: { A: 0, B: 0, F: 0 },
    F: { A: 2, B: 2, F: 2 },
  };

  // índice = Math.sign(life1 - life2) + 1
  const WINNER = [2, 0, 1];
  
  const rounds = Math.min(elf1.length, elf2.length);
  let life1 = 3;
  let life2 = 3;

  for (let i = 0; i < rounds && Math.min(life1, life2) > 0; i++) {
    life2 -= DAMAGE[elf1[i]][elf2[i]];
    life1 -= DAMAGE[elf2[i]][elf1[i]];
  }

  return WINNER[Math.sign(life1 - life2) + 1];
}


elfBattle('A', 'B')
// Ronda 1: A vs B -> Elfo 2 bloquea
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 3 de vida
// → 0

elfBattle('F', 'B')
// Ronda 1: F vs B -> Elfo 2 recibe 2 de daño (F no se bloquea)
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 1 de vida
// → 1

elfBattle('AAB', 'BBA')
// R1: A vs B → Elfo 2 bloquea
// R2: A vs B → Elfo 2 bloquea
// R3: B vs A → Elfo 1 bloquea
// Resultado: Elfo 1 = 3, Elfo 2 = 3
// → 0

elfBattle('AFA', 'BBA')
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1
// Resultado: Elfo 1 = 2, Elfo 2 = 0
// → 1

elfBattle('AFAB', 'BBAF')
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1 → Elfo 2 llega a 0 ¡Batalla termina!
// R4: no se juega, ya que Elfo 2 no tiene vida
// → 1

elfBattle('AA', 'FF')
// R1: A vs F → Elfo 1 -2, Elfo 2 -1
// R2: A vs F → Elfo 1 -2, Elfo 2 -1 → Elfo 1 llega a -1
// → 2
