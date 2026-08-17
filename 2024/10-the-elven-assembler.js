/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  const registers = {};

  // Resuelve un token: si es numérico, lo devuelve como número;
  // si es un registro, devuelve su valor (0 si no existe)
  const resolve = (token) =>
    isNaN(token) ? (registers[token] ?? 0) : Number(token);

  let pointer = 0;

  while (pointer < instructions.length) {
    const [op, x, y] = instructions[pointer].split(" ");

    switch (op) {
      case "MOV":
        registers[y] = resolve(x);
        break;

      case "INC":
        registers[x] = resolve(x) + 1;
        break;

      case "DEC":
        registers[x] = resolve(x) - 1;
        break;

      case "JMP":
        if (resolve(x) === 0) {
          pointer = Number(y);
          continue; // evita el pointer++ de abajo
        }
        break;
    }

    pointer++;
  }

  return registers.A;
}

const instructions = [
  "MOV -1 C", // copia -1 al registro 'C',
  "INC C", // incrementa el valor del registro 'C'
  "JMP C 1", // salta a la instrucción en el índice 1 si 'C' es 0
  "MOV C A", // copia el registro 'C' al registro 'a',
  "INC A", // incrementa el valor del registro 'a'
];

compile(instructions); // -> 2

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */
