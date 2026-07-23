# Responsible Use & Security Guardrails

GitHub Copilot is a powerful accelerator — but **you** remain responsible for
everything you commit. Keep these guardrails in mind throughout the course and
in your day-to-day work.

## The guardrails

- **Always review AI-generated code.** Read it, understand it, and make sure it
  does what you intended before you accept or commit it. If you can't explain
  it, don't ship it.
- **Never paste secrets, credentials, or PII into prompts.** No API keys,
  passwords, tokens, customer data, or personal information — in chat, comments,
  or files you attach as context.
- **Treat Copilot's output like third-party code.** Give it the same scrutiny
  you'd give a pull request from someone you don't know: correctness, security,
  performance, and maintainability.
- **Do an OWASP once-over.** Check for the usual suspects — injection, broken
  auth, secrets in source, weak crypto, missing input validation, sensitive
  data in logs. (Exercise 7 makes this concrete with a security-review agent.)
- **Mind licensing and provenance.** Be aware of your organisation's policy on
  AI-generated code and any suggestions that resemble licensed material.

## Why it matters

AI suggestions are *probabilistic*, not authoritative. They can be subtly
wrong, insecure, or outdated. The engineer's judgement is the last line of
defence — these exercises are designed to build exactly that judgement while you
learn the tooling.

> **Rule of thumb:** if you wouldn't merge it from a stranger's PR without
> review, don't merge it from Copilot without review either.
