# Exercise 1 — Introduction & Setup

> **Session:** Introduction & Setup · **Difficulty:** 🟢 Beginner · **Time:** ~20 min

## Goal
Get Copilot working end-to-end in your editor and use your first three
interactions — **inline completion**, **inline chat**, and **`/fix`** — to
finish a small TypeScript utilities module.

By the end you will have:
- confirmed Copilot is signed in and suggesting code;
- implemented three functions from their doc-comments with Copilot's help;
- used `/fix` to repair a deliberately buggy function.

## What you'll work on
`starter/utils.ts` contains four functions:

| Function | State | How to finish it |
|----------|-------|------------------|
| `toTitleCase` | TODO stub | Accept an inline suggestion, then refine |
| `wordFrequencies` | TODO stub | Describe intent in a comment, let Copilot complete |
| `clamp` | TODO stub | Type the signature and accept the completion |
| `buggyAverage` | **has a bug** | Select it and run **`/fix`** |

## Steps
1. Open `starter/utils.ts`.
2. Dev dependencies are already installed (via `npm install` at the repo root on setup).
3. Replace each `throw new Error("not implemented")` with a real
   implementation using inline suggestions (`Tab` to accept) and inline chat
   (`Cmd/Ctrl+I`).
4. Not sure what a function should do? Select it and ask **`/explain`** in
   inline chat.
5. Select `buggyAverage`, open inline chat, and type `/fix`. Verify the
   corrected logic.
6. Type-check your work: `npm run typecheck`.

## Copilot features practised
- **Inline completions** (ghost text → `Tab`)
- **Inline chat** (`Cmd/Ctrl+I`)
- **Slash commands** `/explain` and `/fix`

## Recommended model
Any **Beginner-tier / fast** model is perfect here — the tasks are small and
well-defined. (You'll compare models deliberately in Exercise 3.)

## Tips (not answers)
- If a suggestion isn't quite right, keep typing — Copilot re-suggests as you
  add context (types, comment intent, examples).
- A precise doc-comment above a function is the cheapest way to steer a good
  completion.
- `/fix` works best when you first **select** the offending code so Copilot
  knows the scope.

## Definition of done
- No `TODO` or `not implemented` markers remain in `starter/utils.ts`.
- `npm run typecheck` passes.
- `buggyAverage` returns a correct average.

---
Works identically whether you launched this repo in a **GitHub Codespace** or
**locally in VS Code** — the toolchain is the same Node setup in both.
