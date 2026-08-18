# TASK — Exercise 6 (Agent Mode)

You are working in a minimal REST task API. Complete **all** of the following
from a **single agent prompt**, and watch the agent plan and execute each step.
This file is the source of truth.

## Goal
Add a `DELETE /tasks/:id` endpoint to the API, fully tested and documented.

## Requirements

1. **Scaffold the endpoint** in `src/app.ts`:
   - `DELETE /tasks/:id` removes the task and responds `204 No Content`.
   - If the id does not exist, respond `404` with a JSON `{ "error": ... }` body.
   - Do not break the existing `GET`/`POST` endpoints.

2. **Write the tests** in `tests/api.test.ts` (mirror the existing style):
   - deleting an existing task returns `204`, and a subsequent `GET` returns `404`;
   - deleting an unknown id returns `404`.

3. **Add OpenAPI documentation** in `openapi.yaml`:
   - Document the `delete:` operation under `/tasks/{id}` with its `204` and `404` responses.

4. **Run the tests** with `npm test` and iterate until everything passes.

## Constraints
- Standard library only — no new dependencies.
- Keep the code style consistent with the existing handlers.
