/**
 * Exercise 2 — Effective Prompting kata.
 *
 * The task is the SAME for all three attempts:
 *   Parse a CSV string and return only the rows where a given column
 *   matches a given value.
 *
 * Solve it three times with increasing prompt quality, then record your
 * observations in RESULTS.md.
 *
 * A row is represented as a Record<string, string> keyed by the header names.
 */

export type CsvRow = Record<string, string>;

// =====================================================================
// === Attempt 1 — Minimal prompt =====================================
// Write the barest possible comment above the function and let Copilot
// complete it with minimal guidance.
// =====================================================================
export function filterCsvAttempt1(
  csv: string,
  column: string,
  value: string,
): CsvRow[] {
  // TODO: implement using a minimal prompt
  throw new Error("not implemented");
}

// =====================================================================
// === Attempt 2 — Add specifics ======================================
// Describe inputs, outputs, and edge cases (headers, empty lines,
// whitespace trimming) before implementing.
// =====================================================================
export function filterCsvAttempt2(
  csv: string,
  column: string,
  value: string,
): CsvRow[] {
  // TODO: implement guided by a more specific prompt
  throw new Error("not implemented");
}

// =====================================================================
// === Attempt 3 — Full signature, types & examples ===================
// Provide a complete JSDoc block with @param, @returns and @example,
// plus explicit types, then implement.
// =====================================================================
/**
 * TODO: replace this stub with your high-quality prompt and implementation.
 *
 * @param csv    - Raw CSV text. The first line is the header row.
 * @param column - The header name to match against.
 * @param value  - The exact value the column must equal.
 * @returns The matching rows as objects keyed by header name.
 * @example
 *   filterCsvAttempt3("name,role\nAda,eng\nGrace,eng", "role", "eng")
 *   // => [{ name: "Ada", role: "eng" }, { name: "Grace", role: "eng" }]
 */
export function filterCsvAttempt3(
  csv: string,
  column: string,
  value: string,
): CsvRow[] {
  // TODO: implement guided by a rich, precise prompt
  throw new Error("not implemented");
}
