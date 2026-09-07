import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import type { Server } from "node:http";
import { createApp } from "../src/app.ts";

let server: Server;
let base: string;

before(async () => {
  server = createApp();
  await new Promise<void>((resolve) => server.listen(0, resolve));
  const address = server.address();
  const port = typeof address === "object" && address ? address.port : 0;
  base = `http://localhost:${port}`;
});

after(() => {
  server.close();
});

async function createTestCase(name: string) {
  const res = await fetch(`${base}/tests`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return { res, testCase: await res.json() };
}

describe("test cases API", () => {
  it("registers a test case", async () => {
    const { res, testCase } = await createTestCase("login with valid credentials");
    assert.equal(res.status, 201);
    assert.equal(testCase.name, "login with valid credentials");
    assert.equal(testCase.automated, false);
  });

  it("rejects a test case with no name", async () => {
    const res = await fetch(`${base}/tests`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({}),
    });
    assert.equal(res.status, 400);
  });

  it("lists test cases", async () => {
    await createTestCase("a");
    const list = await (await fetch(`${base}/tests`)).json();
    assert.ok(Array.isArray(list) && list.length >= 1);
  });

  it("gets a test case by id", async () => {
    const { testCase } = await createTestCase("find me");
    const res = await fetch(`${base}/tests/${testCase.id}`);
    assert.equal(res.status, 200);
  });

  it("returns 404 for an unknown id", async () => {
    const res = await fetch(`${base}/tests/9999`);
    assert.equal(res.status, 404);
  });

  // The agent should add tests here for DELETE /tests/:id.
});
