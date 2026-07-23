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

async function createTask(title: string) {
  const res = await fetch(`${base}/tasks`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ title }),
  });
  return { res, task: await res.json() };
}

describe("tasks API", () => {
  it("creates a task", async () => {
    const { res, task } = await createTask("write tests");
    assert.equal(res.status, 201);
    assert.equal(task.title, "write tests");
    assert.equal(task.done, false);
  });

  it("rejects a task with no title", async () => {
    const res = await fetch(`${base}/tasks`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({}),
    });
    assert.equal(res.status, 400);
  });

  it("lists tasks", async () => {
    await createTask("a");
    const list = await (await fetch(`${base}/tasks`)).json();
    assert.ok(Array.isArray(list) && list.length >= 1);
  });

  it("gets a task by id", async () => {
    const { task } = await createTask("find me");
    const res = await fetch(`${base}/tasks/${task.id}`);
    assert.equal(res.status, 200);
  });

  it("returns 404 for an unknown id", async () => {
    const res = await fetch(`${base}/tasks/9999`);
    assert.equal(res.status, 404);
  });

  // The agent should add tests here for DELETE /tasks/:id.
});
