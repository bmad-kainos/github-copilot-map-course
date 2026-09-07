# Exercise 4 — Copilot in Your Daily Workflow

> **Session:** Copilot in Your Daily Workflow · **Difficulty:** 🟡 Intermediate · **Time:** ~40 min

## Goal
Practise the **red → green → refactor → document** loop with Copilot as your
pair. You'll add one operation to a small Test Case API **test-first**, using
slash commands at each stage.

## What you'll work on
`starter/src/api.ts` is an in-memory `TestRunApi` with `registerTestCase`,
`listTestCases`, and `getTestCase` already implemented and tested. Your job is
to add **`markTestCasePassed(id)`** — mark a test case as passed — the TDD way.

## The workflow (do it in this order)
1. **Red** — in `tests/api.test.ts`, use Copilot Chat **`/tests`** to generate
   tests for `markTestCasePassed` (existing id → `passed` becomes `true`;
   unknown id → your chosen behaviour). Run them and watch them **fail**.
2. **Green** — implement `markTestCasePassed` in `src/api.ts` with inline
   completions until the tests pass.
3. **Refactor** — select the method and use **`/fix`** to tidy it.
4. **Document** — use **`/doc`** to add a JSDoc block above the method.
5. **Script it** — ask Copilot to write `scripts/run-summary.ts`: a script that
   runs the test suite and prints a plain-English summary (total tests, passed,
   failed, any failures by name). Run it with `npm run summary`.

Run tests with `npm test`.

## Copilot features practised
- Slash commands **`/tests`**, **`/fix`**, **`/doc`**
- Test-driven development with an AI pair
- Iterating against a real test runner
- **Using Copilot to write automation scripts** — not just application code

## Recommended model
A 🟡 **Balanced** model suits this multi-step, everyday workflow. Reach for a
🔴 reasoning model only if you get stuck on a failing test.

## Tips (not answers)
- Write (or generate) the test **before** the implementation — let it fail
  first so you know it's real.
- Decide the unknown-id behaviour deliberately (throw `TestCaseNotFoundError`?) and
  assert it — don't leave it implicit.
- `/doc` is great, but read what it writes; docs that lie are worse than none.
- For the summary script, tell Copilot: *"write a Node.js script using the
  `node:child_process` module that runs `npm test` in this directory, captures
  stdout, parses the `node:test` TAP output, and prints a summary."*
  Give it the exact output format you want.

## Common pitfalls
- Skipping the failing step. If you implement first and then write the test, you
  can't be sure the test is actually testing anything.
- Letting `/doc` write a comment that just restates the method name. Push back
  with: *"add what the caller should do if the id does not exist."*

## Definition of done
- `markTestCasePassed` is implemented and documented (has a `/** ... */` block).
- The `it.todo` placeholder is replaced with real, passing tests.
- `npm test` passes with no `todo`/pending tests left.
- `scripts/run-summary.ts` exists and `npm run summary` prints a human-readable
  result summary to stdout.
