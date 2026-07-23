# Exercise 5 — Customisation & Context Control

> **Session:** Customisation & Context Control · **Difficulty:** 🟡 Intermediate · **Time:** ~30 min

## Goal
Shape Copilot's behaviour with a **custom instructions file**, then feel the
difference it makes. You'll author `.github/copilot-instructions.md` and watch
your standards flow into every suggestion.

## What you'll work on
`starter/src/index.ts` has a `totalPrice` helper and a `TODO` to add
`formatCurrency(pence: number): string` returning a GBP string like `"£12.34"`.

The catch: **there are no custom instructions yet**. You'll create them.

## Steps
1. **Look, don't copy** — an example lives at
   `.github/copilot-instructions.example.md` in the repo root. Read it for
   inspiration only.
2. **Create the real file** — add `.github/copilot-instructions.md` at the repo
   root with *your* coding standards (naming, error handling, comment style,
   currency formatting conventions, etc.).
3. **Feel the effect** — implement `formatCurrency` with Copilot and notice how
   your instructions steer the result.
4. Type-check with `npm run typecheck` (or run the file with `npm start`).

> The automated check looks for a real `.github/copilot-instructions.md` — the
> `.example.md` file does **not** count, so the exercise stays genuine.

## Copilot features practised
- **`.github/copilot-instructions.md`** custom instructions
- **Context control** — steering suggestions with repo-level guidance
- Attaching and referencing context in chat

## Recommended model
A 🟡 **Balanced** model is plenty. This exercise is about *context*, not raw
model power.

## Tips (not answers)
- Be specific and prescriptive: "always X", "never Y". Vague instructions
  produce vague effects.
- Instructions are living docs — tweak them, re-prompt, and watch suggestions
  shift.
- Keep them short and high-signal; a wall of text dilutes the guidance.

## Definition of done
- `.github/copilot-instructions.md` exists at the repo root and reflects real,
  specific standards.
- `formatCurrency` is implemented and type-checks.

---
Works identically in a **GitHub Codespace** or **locally in VS Code**.
