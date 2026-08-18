# Exercise 5 — Audit a page for accessibility and performance

> **Session:** Beyond Functional Testing · **Difficulty:** 🟡 Intermediate · **Time:** ~35 min

## Goal
Most automated test suites check *what* the code does. This exercise asks:
*is it usable by everyone, and does it perform acceptably?* You will use
Copilot to generate accessibility tests, understand and fix WCAG violations,
scaffold a load test, and turn the findings into a defect report.

By the end you will have:
- generated axe-core tests with Copilot and seen what they catch;
- fixed at least the critical and serious WCAG violations in the sample page;
- set a performance budget in a k6 load-test skeleton;
- produced a short defect report with Copilot's help.

## What you'll work on

| File | Purpose |
|------|---------|
| `starter/app/index.html` | Sample page — contains deliberate accessibility issues |
| `starter/tests/accessibility.test.ts` | axe-core harness (partially complete) |
| `starter/k6/load-test.js` | k6 load-test skeleton |

## Steps

### Part 1 — Run the accessibility tests and understand the output (~10 min)
1. Install dependencies and Playwright browsers:
   ```
   npm run test:install --workspace=exercises/exercise-5/starter
   npm install --workspace=exercises/exercise-5/starter
   ```
2. Run the tests — they will fail:
   ```
   npm test --workspace=exercises/exercise-5/starter
   ```
3. Read the violation output. Pick one violation and ask Copilot:
   *"Explain this axe-core violation and show me how to fix it in HTML."*

### Part 2 — Fix the WCAG violations (~15 min)
4. Work through `app/index.html` fixing the violations one by one, using
   Copilot to explain each one before you fix it.
5. Re-run the tests after each fix. Aim for zero critical and serious
   violations.

> **Tip:** ask Copilot to generate a full set of assertions for the violations
> it already knows are present. Compare what it generates with what axe-core
> actually reports.

### Part 3 — Scaffold the load test (~5 min)
6. Open `k6/load-test.js`. Ask Copilot to:
   - suggest realistic `vus` and `duration` values for a small web app;
   - fill in a `thresholds` block that captures your performance budget
     (e.g. p95 response time < 500 ms, error rate < 1%).
7. (Optional — needs k6 installed locally) Run the load test against a local
   server and interpret the output.

### Part 4 — Write the defect report (~5 min)
8. Ask Copilot (in Copilot Chat): *"Based on these axe-core findings, write a
   short defect report in Markdown with: title, severity, steps to reproduce,
   expected behaviour, actual behaviour, and fix applied."*
9. Paste the generated report into a new file `DEFECT-REPORT.md` in the
   `starter/` folder.

## Copilot features practised
- **Copilot Chat** — explaining violations and generating fix suggestions
- **Inline completions** — filling in test assertions and thresholds
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
- For the k6 thresholds, ask Copilot what a realistic p95 target is for a
  static page, and why p95 is more useful than the average.

## Common pitfalls
- Fixing the symptom but not the cause. For example, adding `alt=""` to a
  decorative image is correct — but adding `alt="image"` just moves the
  violation to a different rule.
- Confusing "no axe violations" with "fully accessible". axe-core is a tool,
  not a guarantee.
- Running the k6 test against the file:// URL instead of a real server. k6
  tests HTTP; you need `server.mjs` or a static file server running.

## Definition of done
- `npm test --workspace=exercises/exercise-5/starter` passes with zero
  critical or serious violations.
- `k6/load-test.js` has a filled-in `thresholds` block (not commented out).
- `starter/DEFECT-REPORT.md` exists and is non-empty.
