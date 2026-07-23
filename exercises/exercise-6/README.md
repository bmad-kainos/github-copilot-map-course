# Exercise 6 — Agent Mode & Skills

> **Session:** Agent Mode & Skills · **Difficulty:** 🔴 Advanced · **Time:** ~40 min

## Goal
Use **Agent Mode** to carry out a **multi-file change from a single prompt** —
scaffolding an endpoint, testing it, and documenting it — while you supervise
the plan and the diffs.

## What you'll work on
`starter/` is a tiny dependency-free REST API (`src/app.ts`) with:

- `GET /tasks` · `POST /tasks` · `GET /tasks/:id`

Your task (see **`starter/TASK.md`**): add **`DELETE /tasks/:id`**, end-to-end.

## Steps
1. Open `starter/` and read `TASK.md` — it's the single source of truth for the
   agent prompt.
2. In **Agent Mode**, give one prompt that asks the agent to:
   - add the `DELETE /tasks/:id` handler in `src/app.ts` (`204` on success,
     `404` when missing);
   - add tests in `tests/api.test.ts`;
   - document the operation in `openapi.yaml` (the `delete:` block);
   - run `npm test` and iterate until green.
3. **Review every step** — approve the plan, read each diff, don't rubber-stamp.
4. Confirm `npm test` passes and the OpenAPI file documents the new route.

## Copilot features practised
- **Agent Mode** — autonomous, multi-step, multi-file edits
- Supervising an agent: plans, diffs, tool calls
- **Skills**/tools the agent uses to run tests and edit files

## Recommended model
A 🔴 **Reasoning / Advanced** model is the right call — the agent must plan
across several files and keep them consistent.

## Tips (not answers)
- Put the acceptance criteria in the prompt (status codes, files to touch,
  "run the tests"). Agents deliver what you *specify*.
- Let the agent run the tests itself and self-correct — that's the point of
  agent mode.
- Still your code: read the diff before accepting. You own what you merge.

## Definition of done
- `src/app.ts` handles `DELETE /tasks/:id` (204 / 404).
- `tests/api.test.ts` covers delete-existing and delete-unknown; `npm test`
  passes.
- `openapi.yaml` documents the `delete:` operation under `/tasks/{id}`.

---
Works identically in a **GitHub Codespace** or **locally in VS Code**.
