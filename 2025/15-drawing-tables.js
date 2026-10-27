/**
 * @param {Array<Object>} data - The data to draw the table
 * @param {string} sortBy - The field to sort the table
 * @returns {string}
 */
function drawTable(data, sortBy) {
  // Code here
  if (!data.length) return "";

  const keys = Object.keys(data[0]);
  const headers = keys.map((_, i) => String.fromCharCode(65 + i));

  const compare = (a, b) =>
    typeof a === "number" && typeof b === "number" ?
      a - b
    : String(a).localeCompare(String(b));

  const rows = [...data]
    .sort((a, b) => compare(a[sortBy], b[sortBy]))
    .map((item) => keys.map((key) => String(item[key] ?? "")));
  console.log(rows);

  const widths = headers.map((h, i) =>
    Math.max(h.length, ...rows.map((row) => row[i].length)),
  );

  const line = "+" + widths.map((w) => "-".repeat(w + 2)).join("+") + "+";
  const format = (cells) =>
    "| " + cells.map((cell, i) => cell.padEnd(widths[i])).join(" | ") + " |";

  return [line, format(headers), line, ...rows.map(format), line].join("\n");
}

drawTable(
  [
    { name: "Charlie", city: "New York" },
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
  ],
  "name",
);
// +---------+----------+
// | A       | B        |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

drawTable(
  [
    { gift: "Book", quantity: 5 },
    { gift: "Music CD", quantity: 1 },
    { gift: "Doll", quantity: 10 },
  ],
  "quantity",
);
// +----------+----+
// | A        | B  |
// +----------+----+
// | Music CD | 1  |
// | Book     | 5  |
// | Doll     | 10 |
// +----------+----+
