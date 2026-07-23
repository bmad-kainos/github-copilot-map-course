# Copilot Instructions — Example (used by Exercise 5)

> This is an **example** custom-instructions file that ships with the course so
> you have something to reference in Exercise 5. When you do Exercise 5, you'll
> author your own version of this file — feel free to adapt these rules.
>
> GitHub Copilot automatically reads `.github/copilot-instructions.md` and
> applies its guidance to code suggestions across the repository. This file is
> named `.example.md` on purpose so it does **not** auto-apply — Exercise 5 is
> about creating the real `.github/copilot-instructions.md` yourself.

## Coding Standards

- Use **TypeScript in strict mode**. Never use the `any` type — prefer precise
  types, generics, or `unknown` with narrowing.
- Every **exported function must have a JSDoc** block documenting its parameters,
  return value, and thrown errors.
- Prefer a **functional style**: pure functions, `const` bindings, and immutable
  data over classes and in-place mutation.

## Testing

- New behaviour should be covered by unit tests using `node:test` and
  `node:assert/strict`.
- Tests should cover the happy path plus at least one edge case.

## Naming & Style

- Use descriptive, intention-revealing names (`filterActiveUsers`, not `f`).
- Keep functions small and single-purpose.
- Handle errors explicitly; do not swallow exceptions silently.
