/**
 * Exercise 1 starter utilities.
 *
 * Complete each function marked with `TODO: implement` using GitHub Copilot
 * inline completions. Read each JSDoc comment first — Copilot uses it as
 * context, so a clear description gives a better suggestion.
 *
 * Works the same whether you're in a Codespace or local VS Code.
 */

/**
 * Return `text` with the first letter of each word capitalised.
 *
 * @example toTitleCase("hello world") // => "Hello World"
 */
export function toTitleCase(text: string): string {
  // TODO: implement
  throw new Error("not implemented");
}

/**
 * Count how many times each word appears in `words`.
 *
 * @example wordFrequencies(["a", "b", "a"]) // => { a: 2, b: 1 }
 */
export function wordFrequencies(words: string[]): Record<string, number> {
  // TODO: implement
  throw new Error("not implemented");
}

/**
 * Constrain `value` to the inclusive range [`low`, `high`].
 *
 * @example clamp(12, 0, 10) // => 10
 */
export function clamp(value: number, low: number, high: number): number {
  // TODO: implement
  throw new Error("not implemented");
}

/**
 * Return the arithmetic mean of `numbers`.
 *
 * NOTE: This function contains a deliberate bug for the `/fix` exercise.
 * Select it in the editor and run `/fix` in Copilot Chat or Cmd+I and type `/fix`.
 */
export function buggyAverage(numbers: number[]): number {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  // Bug: dividing by the wrong value
  return total / (numbers.length - 1);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("toTitleCase:", toTitleCase("hello copilot"));
  console.log("wordFrequencies:", wordFrequencies(["a", "b", "a", "c", "b", "a"]));
  console.log("clamp:", clamp(42, 0, 10));
  console.log("buggyAverage:", buggyAverage([2, 4, 6]));
}
