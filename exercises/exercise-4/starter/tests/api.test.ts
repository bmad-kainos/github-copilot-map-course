import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { TaskApi, TaskNotFoundError } from "../src/api.ts";

describe("createTask", () => {
  it("creates a task with an incrementing id", () => {
    const api = new TaskApi();
    const first = api.createTask("write tests");
    const second = api.createTask("write code");
    assert.equal(first.id, 1);
    assert.equal(second.id, 2);
    assert.equal(first.done, false);
  });
});

describe("listTasks", () => {
  it("returns all created tasks", () => {
    const api = new TaskApi();
    api.createTask("a");
    api.createTask("b");
    assert.equal(api.listTasks().length, 2);
  });
});

describe("getTask", () => {
  it("returns the requested task", () => {
    const api = new TaskApi();
    const task = api.createTask("find me");
    assert.deepEqual(api.getTask(task.id), task);
  });

  it("throws TaskNotFoundError for an unknown id", () => {
    const api = new TaskApi();
    assert.throws(() => api.getTask(999), TaskNotFoundError);
  });
});

describe("completeTask", () => {
  // TODO: use Copilot Chat `/tests` to generate tests for completeTask.
  //
  // Your tests should cover:
  //   - completing an existing task so that getTask().done is then true
  //   - completing an unknown id (decide and assert the behaviour)
  //
  // Write these FIRST and watch them fail before implementing completeTask.
  it.todo("marks an existing task as done");
});
