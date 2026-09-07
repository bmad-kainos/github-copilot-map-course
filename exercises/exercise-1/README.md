# Exercise 1 — Your first Copilot suggestions

> **Session:** Introduction to Copilot · **Difficulty:** 🟢 Beginner · **Time:** ~15 min

## Goal
Make Copilot your pair from the very first line. You will accept a completion,
cycle through alternatives, ask `/explain` on unfamiliar code, and use `/fix`
to repair a buggy function — all without leaving the editor.

By the end you will have:
- written real code by accepting inline suggestions;
- seen that Copilot offers more than one option for every completion;
- used `/explain` to understand code you didn't write;
- used `/fix` to correct a deliberate bug.

## What you'll work on
`starter/utils.ts` contains four functions:

| Function | State | How to finish it |
|----------|-------|------------------|
| `toTestCaseTitle` | TODO stub | Accept an inline suggestion, then refine |
| `tagFrequencies` | TODO stub | Describe intent in a comment, let Copilot complete |
| `clamp` | TODO stub | Type the signature and accept the first completion |
| `averageTestDurationMs` | **has a bug** | Select it and run **`/fix`** |

## Steps
1. Open `starter/utils.ts`.
2. Replace the first `throw new Error("not implemented")` by writing a short
   comment above it that describes what the function should do, then accept
   Copilot's completion with `Tab`.
3. **Before accepting the next completion**, press `Alt+]` (Windows / Linux) or
   `Option+]` (macOS) to cycle through the alternative suggestions. Pick the
   one you prefer.
4. Complete the remaining stubs using inline suggestions and inline chat
   (`Cmd/Ctrl+I`).
5. Not sure what a function should do? Select it and ask **`/explain`** in
   inline chat.
6. Select `averageTestDurationMs`, open inline chat, and type `/fix`. Review the
   proposed change before accepting.
7. Type-check your work: `npm run typecheck`.

## Copilot features practised
- **Inline completions** (ghost text → `Tab`)
- **Alternative completions** (`Alt/Option+]`)
- **Inline chat** (`Cmd/Ctrl+I`)
- **Slash commands** `/explain` and `/fix`

## Recommended model
Any **fast / Beginner-tier** model is ideal here — the tasks are small and
well-defined. You will compare models deliberately in Exercise 3.

## Tips (not answers)
- If a suggestion isn't quite right, keep typing — Copilot re-suggests as you
  add more context (types, comment intent, examples).
- A precise doc-comment above a function is the cheapest way to steer a
  completion in the right direction.
- `/fix` works best when you first **select** the offending code so Copilot
  knows the scope.
- Alternatives are not random — read a few before settling on one.

## Common pitfalls
- Accepting the first suggestion without reading it. Copilot is usually right,
  but not always — skim the ghost text before pressing `Tab`.
- Typing your entire implementation first, then wondering why Copilot went
  quiet. Pause after a comment or signature and let it suggest.

## Definition of done
- No `TODO` or `not implemented` markers remain in `starter/utils.ts`.
- `npm run typecheck` passes with no errors.
- `averageTestDurationMs` returns a correct average.
