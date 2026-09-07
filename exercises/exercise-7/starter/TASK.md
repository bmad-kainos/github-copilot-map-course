# TASK — Exercise 7 (Agent Mode)

You are working in a minimal REST test case management API. Complete **all**
of the following from a **single agent prompt**, and watch the agent plan and
execute each step. This file is the source of truth.

## Goal
Add a `DELETE /tests/:id` endpoint to the API, fully tested and documented —
for retiring a test case that's no longer needed.

## Requirements

1. **Scaffold the endpoint** in `src/app.ts`:
   - `DELETE /tests/:id` removes the test case and responds `204 No Content`.
   - If the id does not exist, respond `404` with a JSON `{ "error": ... }` body.
   - Do not break the existing `GET`/`POST` endpoints.

2. **Write the tests** in `tests/api.test.ts` (mirror the existing style):
   - deleting an existing test case returns `204`, and a subsequent `GET` returns `404`;
   - deleting an unknown id returns `404`.

3. **Add OpenAPI documentation** in `openapi.yaml`:
   - Document the `delete:` operation under `/tests/{id}` with its `204` and `404` responses.

4. **Run the tests** with `npm test` and iterate until everything passes.

## Constraints
- Standard library only — no new dependencies.
- Keep the code style consistent with the existing handlers.
