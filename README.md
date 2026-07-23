# GitHub Copilot: From Zero to Agent

The hands-on exercise repository for the **Kainos GitHub Copilot MAP course**.

Work through **7 numbered exercises** that take you from your first inline
completion all the way to orchestrating custom AI agents. Each session follows
the **MAP** model — **M**aster (short theory) → **A**ccomplish (hands-on) →
**P**rogress (recap + what's next) — and is roughly **70% hands-on**.

<!-- COMPLETION_BADGE_PLACEHOLDER -->
![Course Progress](https://img.shields.io/badge/GitHub%20Copilot%20MAP%20Course-In%20Progress-lightgrey?style=for-the-badge&logo=github)
<!-- END_COMPLETION_BADGE -->

---

## Prerequisites

- A **GitHub account** (a personal account is fine — you'll fork this repo to it).
- A **GitHub Copilot licence** (Copilot enabled on your account; some model
  tiers depend on your org's plan — see Exercise 3).
- **Either** a browser (for Codespaces) **or** **VS Code** locally with the
  **GitHub Copilot** and **GitHub Copilot Chat** extensions.

---

## Two ways in — pick either

Every exercise works **identically** in both paths.

### Path A — One-click GitHub Codespace (zero local setup)

1. **Fork** this repository into your own GitHub account (top-right **Fork**).
2. **Open a Codespace** on your fork — click the button below (or **Code →
   Codespaces → Create codespace**):

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/kainos-org/github-copilot-map-course)

3. The devcontainer installs Node, the Copilot extensions, and all npm
   dependencies automatically.
   **Follow the exercise READMEs** in order, starting with Exercise 1.

### Path B — Fork & open locally in VS Code

1. **Fork** this repository to your GitHub account.
2. **Clone** your fork and open it in VS Code:
   ```bash
   git clone https://github.com/<your-username>/github-copilot-map-course.git
   cd github-copilot-map-course
   code .
   ```
3. When prompted, install the **recommended extensions** (GitHub Copilot +
   Copilot Chat) — they're listed in `.vscode/extensions.json`.
4. Install all dependencies (once, from the repo root):
   ```bash
   npm install
   ```
5. **Follow the exercise READMEs** in order, starting with Exercise 1.

> Each time you push your work, GitHub Actions checks your progress
> automatically. When all **7** exercises pass, a completion badge is written to
> the top of *your* README.

---

## Course map — 7 sessions

| # | Exercise | Level | ~Time | What you'll practise |
|---|----------|-------|-------|----------------------|
| 1 | [Introduction & Setup](./exercises/exercise-1/README.md) | 🟢 Beginner | ~20m | Inline completions, inline chat, `/explain`, `/fix` |
| 2 | [Effective Prompting](./exercises/exercise-2/README.md) | 🟢 Beginner | ~25m | Prompt quality kata, iterating on output |
| 3 | [Choosing the Right Model](./exercises/exercise-3/README.md) | 🟢 Beginner | ~30m | Model picker, tier trade-offs (Playwright bake-off) |
| 4 | [Copilot in Your Daily Workflow](./exercises/exercise-4/README.md) | 🟡 Intermediate | ~35m | TDD with `/tests`, `/fix`, `/doc` |
| 5 | [Customisation & Context Control](./exercises/exercise-5/README.md) | 🟡 Intermediate | ~30m | `.github/copilot-instructions.md`, context control |
| 6 | [Agent Mode & Skills](./exercises/exercise-6/README.md) | 🔴 Advanced | ~40m | One prompt → REST endpoint + tests + OpenAPI |
| 7 | [Subagents & Custom Agents](./exercises/exercise-7/README.md) | 🔴 Advanced | ~45m | Custom `.prompt.md` agents, orchestration |

Difficulty ramps **3 Beginner → 2 Intermediate → 2 Advanced**.

---

## Responsible use & security

Copilot accelerates you, but you own what you commit. Before you start, read
**[GUARDRAILS.md](./GUARDRAILS.md)**. In short:

- Always **review** AI-generated code — if you can't explain it, don't ship it.
- **Never** paste secrets, credentials, or PII into prompts.
- Treat output like **third-party code**; give it a security/OWASP once-over.
- Mind **licensing** and your org's AI policy.

---

## How progress tracking works

- Each exercise has a workflow (`.github/workflows/exercise-N-check.yml`) that
  validates your work on every push.
- When an exercise passes, the workflow records a marker under
  `.github/completion/` (e.g. `exercise-3.complete`).
- Once **all 7 markers** exist, `award-badge.yml` flips the badge at the top of
  this README to **Complete ✓**.

Watch your checks run under the **Actions** tab of your fork.

### Show it off

When complete, the badge Markdown is:

```markdown
![Course Complete](https://img.shields.io/badge/GitHub%20Copilot%20MAP%20Course-Complete%20%E2%9C%93-brightgreen?style=for-the-badge&logo=github)
```

Add it to your **profile README** to show you finished — your public fork
history is the proof.

---

## Repository layout

```
exercises/
  exercise-1/ … exercise-7/    # one folder per session, each with its own README + starter/
.devcontainer/                 # Codespaces / local devcontainer (Node + Copilot)
.vscode/extensions.json        # recommends the Copilot extensions for local VS Code
.github/
  workflows/                   # exercise-1..7-check.yml + award-badge.yml
  copilot-instructions.example.md   # reference for Exercise 5 (does NOT auto-apply)
  ISSUE_TEMPLATE/              # optional progress-tracking issue
GUARDRAILS.md                  # responsible-use & security guardrails
```

> Reference solutions are **not** included in the exercise folders or linked
> from their READMEs — the checks validate your own work.

---

## Facilitator notes

- Delivered live as **7 sessions** (~45–85 min each), roughly **70% hands-on /
  30% theory**, following the MAP structure.
- Participants fork to their **personal** GitHub accounts and work at their own
  pace; a recommended cadence is ~1 week between sessions so learners use
  Copilot on real work in between.

Good luck, and enjoy building with Copilot! 🚀
