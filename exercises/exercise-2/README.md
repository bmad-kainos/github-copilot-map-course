# Exercise 2 — Effective Prompting

> **Session:** Effective Prompting · **Difficulty:** 🟢 Beginner · **Time:** ~25 min

## Goal
Feel the direct link between **prompt quality** and **output quality**. You'll
solve the *same* problem three times, improving your prompt each time, and
record what changed.

## What you'll work on
`starter/csv-parser.ts` has three functions that must all end up doing the same
thing — filter CSV rows where a column equals a value:

| Function | Prompt style |
|----------|--------------|
| `filterCsvAttempt1` | Minimal — the barest comment |
| `filterCsvAttempt2` | Specific — inputs, outputs, edge cases |
| `filterCsvAttempt3` | Rich — full JSDoc with `@param`/`@returns`/`@example` |

Then complete `RESULTS.md` with your observations.

## Steps
1. Open `starter/csv-parser.ts`.
2. For **Attempt 1**, write a one-line comment and accept Copilot's completion.
3. For **Attempt 2**, describe the edge cases (headers, blank lines, trimming)
   before implementing.
4. For **Attempt 3**, provide the full JSDoc + types, then implement.
5. Fill in every section of `RESULTS.md` — especially which attempt was best
   and *why*.

## Copilot features practised
- Prompt engineering via **comments and JSDoc**
- **Inline chat** iteration
- Comparing outputs across prompt qualities

## Recommended model
A **fast / Beginner-tier** model keeps the loop tight so you can iterate on
prompts quickly.

## Tips (not answers)
- Concrete `@example` lines are unreasonably effective — they pin down
  behaviour better than prose.
- Name your edge cases explicitly ("ignore blank trailing lines", "trim
  whitespace"). Copilot rarely invents requirements you didn't state.
- If Attempt 3 isn't clearly better than Attempt 1, your prompt probably isn't
  specific enough yet.

## Definition of done
- No `TODO` or `not implemented` markers remain in `starter/csv-parser.ts`.
- `RESULTS.md` has **no `_(placeholder)_` text left**.

---
Works identically in a **GitHub Codespace** or **locally in VS Code**.
