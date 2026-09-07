/**
 * Exercise 4 — In-memory Test Case API (starter).
 *
 * A tiny, framework-free service so the exercise stays self-contained.
 * Each method represents an operation a test-case manager would expose.
 *
 * Your job: add the missing `markTestCasePassed` operation, test-first.
 */

export interface TestCase {
  id: number;
  name: string;
  passed: boolean;
}

/** Thrown when an operation references a test case id that does not exist. */
export class TestCaseNotFoundError extends Error {
  constructor(id: number) {
    super(`Test case ${id} not found`);
    this.name = "TestCaseNotFoundError";
  }
}

export class TestRunApi {
  private testCases = new Map<number, TestCase>();
  private nextId = 1;

  /**
   * Register a new test case.
   *
   * @param name - Human-readable test case name.
   * @returns The newly registered test case, including its generated id.
   */
  registerTestCase(name: string): TestCase {
    const testCase: TestCase = { id: this.nextId++, name, passed: false };
    this.testCases.set(testCase.id, testCase);
    return testCase;
  }

  /**
   * List all test cases in insertion order.
   *
   * @returns An array of every test case currently stored.
   */
  listTestCases(): TestCase[] {
    return [...this.testCases.values()];
  }

  /**
   * Fetch a single test case by id.
   *
   * @param id - The id of the test case to retrieve.
   * @returns The matching test case.
   * @throws {TestCaseNotFoundError} If no test case has the given id.
   */
  getTestCase(id: number): TestCase {
    const testCase = this.testCases.get(id);
    if (!testCase) {
      throw new TestCaseNotFoundError(id);
    }
    return testCase;
  }

  // ---------------------------------------------------------------
  // TODO: implement markTestCasePassed
  //
  // markTestCasePassed(id: number): TestCase should mark the matching
  // test case as passed (passed = true) and return it, throwing
  // TestCaseNotFoundError when the id does not exist.
  //
  // Follow the workflow in the exercise README:
  //   1. Write a failing test in tests/api.test.ts first (/tests)
  //   2. Implement here using inline completions
  //   3. Refactor with /fix
  //   4. Document with /doc (add a /** ... */ block above the method)
  // ---------------------------------------------------------------
}
