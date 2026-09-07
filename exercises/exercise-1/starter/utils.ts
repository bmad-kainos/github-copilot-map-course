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
 * Turn a raw test identifier into a readable title: replace underscores
 * with spaces and capitalise the first letter of each word.
 *
 * @example toTestCaseTitle("login_test_invalid_password") // => "Login Test Invalid Password"
 */
export function toTestCaseTitle(rawName: string): string {
  // TODO: implement
  throw new Error("not implemented");
}

/**
 * Count how many times each tag appears across a set of test cases.
 *
 * @example tagFrequencies(["smoke", "regression", "smoke"]) // => { smoke: 2, regression: 1 }
 */
export function tagFrequencies(tags: string[]): Record<string, number> {
  // TODO: implement
  throw new Error("not implemented");
}

/**
 * Constrain `value` to the inclusive range [`low`, `high`] — useful for
 * capping a retry count to a sane maximum.
 *
 * @example clamp(12, 0, 3) // => 3
 */
export function clamp(value: number, low: number, high: number): number {
  // TODO: implement
  throw new Error("not implemented");
}

/**
 * Return the average duration (in ms) across a set of test runs.
 *
 * NOTE: This function contains a deliberate bug for the `/fix` exercise.
 * Select it in the editor and run `/fix` in Copilot Chat or Cmd+I and type `/fix`.
 */
export function averageTestDurationMs(durationsMs: number[]): number {
  let total = 0;
  for (const n of durationsMs) {
    total += n;
  }
  // Bug: dividing by the wrong value
  return total / (durationsMs.length - 1);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("toTestCaseTitle:", toTestCaseTitle("login_test_invalid_password"));
  console.log("tagFrequencies:", tagFrequencies(["smoke", "regression", "smoke", "e2e", "regression", "smoke"]));
  console.log("clamp:", clamp(42, 0, 3));
  console.log("averageTestDurationMs:", averageTestDurationMs([2000, 4000, 6000]));
}
