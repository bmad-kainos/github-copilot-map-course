# Exercise 4 — Copilot in Your Daily Workflow

> **Session:** Copilot in Your Daily Workflow · **Difficulty:** 🟡 Intermediate · **Time:** ~35 min

## Goal
Practise the **red → green → refactor → document** loop with Copilot as your
pair. You'll add one operation to a small Task API **test-first**, using slash
commands at each stage.

## What you'll work on
`starter/src/api.ts` is an in-memory `TaskApi` with `createTask`, `listTasks`,
and `getTask` already implemented and tested. Your job is to add
**`completeTask(id)`** — mark a task as done — the TDD way.

## The workflow (do it in this order)
1. **Red** — in `tests/api.test.ts`, use Copilot Chat **`/tests`** to generate
   tests for `completeTask` (existing id → `done` becomes `true`; unknown id →
   your chosen behaviour). Run them and watch them **fail**.
2. **Green** — implement `completeTask` in `src/api.ts` with inline
   completions until the tests pass.
3. **Refactor** — select the method and use **`/fix`** to tidy it.
4. **Document** — use **`/doc`** to add a JSDoc block above the method.

Run tests with `npm test`.

## Copilot features practised
- Slash commands **`/tests`**, **`/fix`**, **`/doc`**
- Test-driven development with an AI pair
- Iterating against a real test runner

## Recommended model
A 🟡 **Balanced** model suits this multi-step, everyday workflow. Reach for a
🔴 reasoning model only if you get stuck on a failing test.

## Tips (not answers)
- Write (or generate) the test **before** the implementation — let it fail
  first so you know it's real.
- Decide the unknown-id behaviour deliberately (throw `TaskNotFoundError`?) and
  assert it — don't leave it implicit.
- `/doc` is great, but read what it writes; docs that lie are worse than none.

## Definition of done
- `completeTask` is implemented and documented (has a `/** ... */` block).
- The `it.todo` placeholder is replaced with real, passing tests.
- `npm test` passes with no `todo`/pending tests left.

---
Works identically in a **GitHub Codespace** or **locally in VS Code**.
