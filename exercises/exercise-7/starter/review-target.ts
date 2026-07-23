/**
 * Exercise 7 — review target.
 *
 * This file contains DELIBERATE security and quality issues (OWASP Top 10
 * flavours) for your custom `code-reviewer` agent to find. Do NOT ship this.
 *
 * Your job is to run your custom agents against this file — the agents do the
 * reviewing and test-writing, not you.
 */

import { createHash } from "node:crypto";

// Issue: hard-coded secret / credential in source (OWASP A07).
const API_KEY = "sk-live-1234567890-super-secret";

interface User {
  id: number;
  name: string;
}

// Issue: SQL injection via string concatenation (OWASP A03).
export function findUserQuery(db: { query: (sql: string) => User[] }, name: string): User[] {
  const sql = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(sql);
}

// Issue: use of eval on untrusted input (OWASP A03 / code injection).
export function calculate(expression: string): number {
  // eslint-disable-next-line no-eval
  return eval(expression);
}

// Issue: weak hashing (MD5) for passwords, no salt (OWASP A02).
export function hashPassword(password: string): string {
  return createHash("md5").update(password).digest("hex");
}

// Issue: missing input validation + unbounded loop / no bounds checks.
export function getNthItem(items: unknown[], index: number): unknown {
  return items[index];
}

// Issue: leaks secret via logs (sensitive data exposure).
export function debugAuth(): void {
  console.log("Using API key:", API_KEY);
}
