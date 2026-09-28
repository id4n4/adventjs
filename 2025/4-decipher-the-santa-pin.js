/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  // Code here
  const bloques = code.match(/\[(.*?)\]/g);

  if (!bloques || bloques.length < 4) return null;

  let pin = "";

  for (const bloque of bloques) {
    // Caso especial: repetir el dígito anterior
    if (bloque === "[<]") {
      if (pin.length === 0) return null;

      pin += pin[pin.length - 1];
      continue;
    }

    // Obtener el número y las operaciones
    const contenido = bloque.slice(1, -1);
    const numero = Number(contenido[0]);
    const operaciones = contenido.slice(1);

    let digito = numero;

    // Aplicar las operaciones
    for (const operacion of operaciones) {
      if (operacion === "+") {
        digito = (digito + 1) % 10;
      } else if (operacion === "-") {
        digito = (digito - 1 + 10) % 10;
      }
    }

    pin += digito;
  }

  return pin;
}

decodeSantaPin("[1++][2-][3+][<]");
// "3144"

decodeSantaPin("[9+][0-][4][<]");
// "0944"

decodeSantaPin("[1+][2-]");
// null (solo 2 dígitos)
