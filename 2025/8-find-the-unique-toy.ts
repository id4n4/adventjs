function findUniqueToy(toy: string): string {
  const counts = new Map<string, number>();

  for (const char of toy.toLowerCase()) {
    counts.set(char, (counts.get(char) ?? 0) + 1);
  }

  for (const char of toy) {
    if ((counts.get(char.toLowerCase()) ?? 0) === 1) return char;
  }

  return "";
}

findUniqueToy("Gift"); // 'G'
// ℹ️ The G is the first letter that is not repeated
// and we return it exactly as it appears

findUniqueToy("sS"); // ''
// ℹ️ The letters are repeated, since it doesn't distinguish uppercase

findUniqueToy("reindeeR"); // 'i'
// ℹ️ The r is repeated (even if it's uppercase)
// and the e as well, so the first one is 'i'

// More cases:
findUniqueToy("AaBbCc"); // ''
findUniqueToy("abcDEF"); // 'a'
findUniqueToy("aAaAaAF"); // 'F'
findUniqueToy("sTreSS"); // 'T'
findUniqueToy("z"); // 'z'
