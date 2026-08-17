/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  const pattern = /_\w+[-]*\w+\.\w+/g;
  const match = filename.match(pattern);
  return match[0]?.slice(1);
}

decodeFilename("2023122512345678_sleighDesign.png.grinchwa");
// ➞ "sleighDesign.png"

decodeFilename("42_chimney_dimensions.pdf.hack2023");
// ➞ "chimney_dimensions.pdf"

decodeFilename("987654321_elf-roster.csv.tempfile");
// ➞ "elf-roster.csv"
