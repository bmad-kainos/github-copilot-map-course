# Exercise 3 — Choosing the Right Model

> **Session:** Choosing the Right Model · **Difficulty:** 🟢 Beginner · **Time:** ~30 min

## Goal
Run the **same task** through **different Copilot model tiers** and see the
trade-offs for yourself: speed vs. depth vs. cost. You'll do a small
**Playwright "bake-off"** and record which model you'd choose and why.

This is the heart of the **MAP** idea — **M**odel · **A**pproach · **P**rompt —
picking the right model is a skill, not a default.

## The task (same for every model)
Complete a Playwright page object and two end-to-end tests for a tiny login
page:

- `starter/pages/LoginPage.ts` — fill in `goto`, `login`, `welcomeMessage`,
  `errorMessage`.
- `starter/tests/login.spec.ts` — implement the "valid login" and "invalid
  login" tests.

The app under test is served locally (`starter/server.mjs`) — valid credentials
are `standard_user` / `secret_sauce`.

## Model tiers to compare
Run the task **three times**, once per run, resetting the files each time —
matching the deck's bake-off:

| Run | Tier | When it shines |
|-----|------|----------------|
| 1 | **Auto** | Let Copilot choose; everyday flow and routine scaffolding |
| 2 | 🟢 **Fast / lightweight** | Low latency, high volume: boilerplate, page-object methods |
| 3 | 🔴 **Reasoning / deep** | Test strategy, hard root-causes, tricky debugging |

> There's also a 🟡 **Balanced** workhorse tier (Sonnet / GPT-4-class) you'll
> often land on day-to-day. Model names change over time — match the *tier*,
> not a specific name. Your Copilot model picker groups them by
> speed/capability.

## Steps
1. Open `starter/` and read `RESULTS.md`.
2. **Run 1 — Auto.** Complete the page object + tests. Note time, quality, and
   how much you had to correct it.
3. Reset the files. **Run 2 — a Fast/lightweight model.**
4. Reset the files. **Run 3 — a Reasoning model.**
5. Fill in `RESULTS.md` with each run and a final **verdict** (which tier you'd
   reach for day-to-day, and when it's worth stepping up).
6. (Optional, local) Actually run the tests:
   `npm run test:install --workspace=exercises/exercise-3/starter && npm test --workspace=exercises/exercise-3/starter`.

## Copilot features practised
- The **model picker** and understanding tiers
- Judging **cost/speed/quality** trade-offs
- Driving a real test framework (Playwright) with Copilot

## Tips (not answers)
- Time each run. The fast model is often "good enough" — the point is to feel
  *when* it isn't.
- Give every model the **same prompt** so the comparison is fair.
- More capable ≠ always better: note when a reasoning model was overkill.

## Definition of done
- `LoginPage.ts` and `login.spec.ts` have no `TODO` / `not implemented` markers.
- `RESULTS.md` records all three runs and a final verdict — **no
  `_(placeholder)_` left**.

---
Both entry paths work. Playwright browser downloads are heavy, so the automated
check validates your **completed files + recorded comparison** rather than
running the browser in CI. You can still run the tests locally any time.
