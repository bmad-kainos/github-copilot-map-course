# Exercise 7 — Subagents & Custom Agents

> **Session:** Subagents & Custom Agents · **Difficulty:** 🔴 Advanced · **Time:** ~45 min

## Goal
Build **custom agents** that encapsulate a role, wire them together with an
**orchestrator**, and watch the full pipeline run from a single prompt.

You'll work through four progressive parts — each one has a clear deliverable
so you always know when you're done with that step.

## What you'll work on
- `starter/.github/agents/code-reviewer.prompt.md` — security-review agent
- `starter/.github/agents/test-writer.prompt.md` — test-generation agent
- `starter/.github/agents/orchestrator.prompt.md` — orchestrator that chains both
- `starter/review-target.ts` — seeded with **OWASP-flavoured** issues (hard-coded
  secret, SQL injection, `eval`, weak hashing, missing validation, secret-leaking
  logs). **Don't fix it by hand** — your agents do the work.

---

## Part 1 — Define & run the code reviewer (~10 min)

1. Open `code-reviewer.prompt.md` and replace all TODOs:
   - Give it a clear **role** (security review, OWASP Top 10 focus)
   - Specify **severity ratings** (Critical / High / Medium / Low)
   - Define an **output format** (e.g. a ranked findings list)
2. Run the `code-reviewer` agent against `review-target.ts`.
3. Read the output — does it catch all 5 issues? If not, tighten the prompt.

✅ **Done when:** the agent produces a ranked findings list with no TODO markers left in the file.

---

## Part 2 — Define & run the test writer (~10 min)

1. Open `test-writer.prompt.md` and replace all TODOs:
   - Define the **role** (write thorough unit tests)
   - Specify the **test framework** (Node `node:test` + `assert`)
   - Set **coverage expectations** (happy path, error path, edge cases)
2. Run the `test-writer` agent against `review-target.ts` to generate tests for
   the *safe* versions of the functions.
3. Check the output — are the edge cases covered?

✅ **Done when:** the agent produces runnable tests and no TODO markers remain.

---

## Part 3 — Build the orchestrator (~15 min)

1. Open `orchestrator.prompt.md` and replace all TODOs:
   - Role: coordinate `code-reviewer` then `test-writer` in sequence
   - Instructions: review first → pass findings to the test-writer → summarise both outputs
2. Think about what context the orchestrator needs to pass between agents.
3. Run the orchestrator against `review-target.ts` and observe how it delegates.

✅ **Done when:** a single orchestrator prompt triggers both agents in sequence.

---

## Part 4 — Run the full pipeline & reflect (~10 min)

1. Reset to a clean run — one prompt to the orchestrator, no manual steering.
2. Observe: how does it plan, delegate, and summarise?
3. Reflect: what did the multi-agent pipeline give you that a single chat prompt
   wouldn't?

✅ **Done when:** the pipeline completes end-to-end and you can answer the reflection question.

---

## Copilot features practised
- **Custom agents** (`.github/agents/*.prompt.md`)
- **Subagents** — delegating scoped work to a specialist role
- **Orchestration** — chaining agents and passing context between them

## Recommended model
A 🔴 **Reasoning / Advanced** model for all three agents — orchestration and
security review both benefit from deeper reasoning.

## Tips (not answers)
- A custom agent is only as good as its brief — be explicit about role,
  constraints, and output format.
- Ask the reviewer to **rank by severity**; a flat list is harder to act on.
- The orchestrator needs to know what to pass from one agent to the next — think
  about that handoff when writing its instructions.
- Don't hand-fix `review-target.ts` — let the agents surface the issues.

## Definition of done
- All three `*.prompt.md` files have real `name`/`description` and no `TODO` markers.
- You've run the full orchestrated pipeline end-to-end at least once.

---
Works identically in a **GitHub Codespace** or **locally in VS Code**.
