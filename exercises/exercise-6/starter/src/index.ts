/**
 * Exercise 6 — Customisation starter.
 *
 * This project intentionally has NO custom instructions of its own.
 * You will create `.github/copilot-instructions.md` at the repo root,
 * then add a feature below and observe how the instructions shape
 * Copilot's suggestions.
 */

export interface TestSuite {
  name: string;
  ciCostInPence: number;
}

export function totalCiCost(suites: TestSuite[]): number {
  return suites.reduce((sum, s) => sum + s.ciCostInPence, 0);
}

// TODO: add a formatCurrency function
// Once you've written .github/copilot-instructions.md, use Copilot to
// implement `formatCurrency(pence: number): string` that returns a GBP
// string like "£12.34". Notice how your instructions influence the result.

if (import.meta.url === `file://${process.argv[1]}`) {
  const suites: TestSuite[] = [
    { name: "smoke", ciCostInPence: 499 },
    { name: "regression", ciCostInPence: 1299 },
  ];
  console.log("Total CI cost (pence):", totalCiCost(suites));
}
