# Exercise 5 — Audit a page for accessibility

> **Session:** Beyond Functional Testing · **Difficulty:** 🟡 Intermediate · **Time:** ~30 min

## Goal
Most automated test suites check *what* the code does. This exercise asks:
*is it usable by everyone?* You will use Copilot to generate accessibility
tests, understand and fix WCAG violations, and turn the findings into a
defect report.

By the end you will have:
- generated axe-core tests with Copilot and seen what they catch;
- fixed at least the critical and serious WCAG violations in the sample page;
- produced a short defect report with Copilot's help.

> Accessibility is one example of non-functional quality — the same pattern
> (generate checks → ask Copilot to explain the failure → fix → re-check)
> applies just as well to performance, security, resilience and usability.
> This exercise focuses on accessibility only; explore the others yourself
> once you're comfortable with the pattern.

> **App under test:** `starter/app/index.html` is a working page from
> **Kainos Shop** — the same fictional shop app used in Exercise 3 — with
> deliberate accessibility issues (bad locators/markup, contrast, missing
> labels) layered on top. It is functionally fine; axe-core is flagging
> *usability* defects, not broken features.
>
> **Kainos Shop is not one shared codebase.** This exercise ships its own
> self-contained copy of the app, independent of Exercise 3 — see "Running
> this exercise" below for the exact commands for *this* copy.

## What you'll work on

| File | Purpose |
|------|---------|
| `starter/app/index.html` | Kainos Shop product page — contains deliberate accessibility issues |
| `starter/tests/accessibility.test.ts` | axe-core harness (partially complete) |

## Running this exercise
This exercise's copy of Kainos Shop is entirely self-contained under
`exercises/exercise-5/starter/`. To run it locally:
```
npm install --workspace=exercises/exercise-5/starter
npm run test:install --workspace=exercises/exercise-5/starter
npm test --workspace=exercises/exercise-5/starter
```

## Steps

### Part 1 — Run the accessibility tests and understand the output (~10 min)
1. Install dependencies and Playwright browsers (see "Running this exercise"
   above if you haven't already).
2. Run the tests — they will fail:
   ```
   npm test --workspace=exercises/exercise-5/starter
   ```
3. Read the violation output. Pick one violation and ask Copilot:
   *"Explain this axe-core violation and show me how to fix it in HTML."*

### Part 2 — Fix the WCAG violations (~15 min)
4. Work through `app/index.html` fixing the violations one by one, using
   Copilot to explain each one before you fix it. Don't let it silently patch
   them — the explanation is where the learning is.
5. Re-run the tests after each fix. Aim for zero critical and serious
   violations.

> **Tip:** ask Copilot to generate a full set of assertions for the violations
> it already knows are present. Compare what it generates with what axe-core
> actually reports.

### Part 3 — Write the defect report (~5 min)
6. Ask Copilot (in Copilot Chat): *"Based on these axe-core findings, write a
   short defect report in Markdown with: title, severity, steps to reproduce,
   expected behaviour, actual behaviour, and fix applied."*
7. Paste the generated report into a new file `DEFECT-REPORT.md` in the
   `starter/` folder.

## Copilot features practised
- **Copilot Chat** — explaining violations and generating fix suggestions
- **Inline completions** — filling in test assertions
- **`/doc`** — generating the defect report from findings

## Recommended model
A 🟡 **Balanced** model suits this exercise well. Accessibility explanations
benefit from a model that can reason about WCAG criteria, but you do not need
a reasoning model.

## Tips (not answers)
- axe-core does not catch every WCAG issue — it catches roughly 30–40% of
  them automatically. Look at the HTML manually too.
- Ask Copilot to explain the *why* behind a violation, not just the fix.
  Understanding the criterion makes you faster at spotting the next one.
- `impact: "critical"` violations are the most urgent — screen readers may be
  completely blocked.

## Common pitfalls
- Fixing the symptom but not the cause. For example, adding `alt=""` to a
  decorative image is correct — but adding `alt="image"` just moves the
  violation to a different rule.
- Confusing "no axe violations" with "fully accessible". axe-core is a tool,
  not a guarantee.

## Definition of done
- `npm test --workspace=exercises/exercise-5/starter` passes with zero
  critical or serious violations.
- `starter/DEFECT-REPORT.md` exists and is non-empty.
