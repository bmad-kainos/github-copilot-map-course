import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { TestRunApi, TestCaseNotFoundError } from "../src/api.ts";

describe("registerTestCase", () => {
  it("registers a test case with an incrementing id", () => {
    const api = new TestRunApi();
    const first = api.registerTestCase("login with valid credentials");
    const second = api.registerTestCase("login with invalid credentials");
    assert.equal(first.id, 1);
    assert.equal(second.id, 2);
    assert.equal(first.passed, false);
  });
});

describe("listTestCases", () => {
  it("returns all registered test cases", () => {
    const api = new TestRunApi();
    api.registerTestCase("a");
    api.registerTestCase("b");
    assert.equal(api.listTestCases().length, 2);
  });
});

describe("getTestCase", () => {
  it("returns the requested test case", () => {
    const api = new TestRunApi();
    const testCase = api.registerTestCase("find me");
    assert.deepEqual(api.getTestCase(testCase.id), testCase);
  });

  it("throws TestCaseNotFoundError for an unknown id", () => {
    const api = new TestRunApi();
    assert.throws(() => api.getTestCase(999), TestCaseNotFoundError);
  });
});

describe("markTestCasePassed", () => {
  // TODO: use Copilot Chat `/tests` to generate tests for markTestCasePassed.
  //
  // Your tests should cover:
  //   - marking an existing test case so that getTestCase().passed is then true
  //   - marking an unknown id (decide and assert the behaviour)
  //
  // Write these FIRST and watch them fail before implementing markTestCasePassed.
  it.todo("marks an existing test case as passed");
});
