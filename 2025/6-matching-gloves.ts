type Glove = { hand: "L" | "R"; color: string };

function matchGloves(gloves: Glove[]): string[] {
  // Code here
  const unmatched = new Map<string, { L: number; R: number }>();
  const result: string[] = [];

  for (const { hand, color } of gloves) {
    const counts = unmatched.get(color) ?? { L: 0, R: 0 };
    const opposite = hand === "L" ? "R" : "L";

    if (counts[opposite] > 0) {
      counts[opposite]--;
      result.push(color);
    } else {
      counts[hand]++;
    }

    unmatched.set(color, counts);
  }

  return result;
}

const gloves: Glove[] = [
  { hand: "L", color: "red" },
  { hand: "R", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
  { hand: "L", color: "green" },
];

matchGloves(gloves);
// ["red", "green"]

const gloves2: Glove[] = [
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
];

matchGloves(gloves2);
// ["gold", "gold"]

const gloves3: Glove[] = [
  { hand: "L", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
];

matchGloves(gloves3);
// []

const gloves4: Glove[] = [
  { hand: "L", color: "green" },
  { hand: "L", color: "red" },
  { hand: "R", color: "red" },
  { hand: "R", color: "green" },
];

matchGloves(gloves4);
// ['red', 'green']
